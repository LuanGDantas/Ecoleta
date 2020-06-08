import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet';
import api from '../../services/api'

import Dropzone from '../../components/Dropzone'

import './style.css';

import logo from '../../assets/logo.svg';


interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

// apos definir a interface lembra de definir o tipo(generique) do estado (neste caso um array de items)
const CreatPoint = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);
  const [selectedFile, setSelectedFile] = useState<File>();
  

  const history = useHistory();

  useEffect( () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    // parecido com async o then
    api.get('items').then(response => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);
      setUfs(ufInitials);
    });
  }, []);

  useEffect(() => {
    // carregar as cidades sempre que UF mudar
    if (selectedUf === '0')
      return;

    axios
      .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome);
        setCities(cityNames);
      });
  }, [selectedUf]);

  //  o tipo do event deve ser importado do react o ChangeEvent do tipo <HTMLSelectElement>
  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = (event.target.value);
    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = (event.target.value);
    setSelectedCity(city);
  }
  //  o tipo do event deve ser importado do leaflet o tipo LeafletMouseEvent
  function handleMapClick(event: LeafletMouseEvent){
    setSelectedPosition([ 
      event.latlng.lat, 
      event.latlng.lng 
    ]);
  }

  function handleImputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value })
  }
  //como nessecito guarda o anterior selecionado e caso queira deslecionar preciso retirar assim usamos 
  function handleSelectItem(id: number){
    const alreadySelect = selectedItems.findIndex(item => item === id);

    if(alreadySelect >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItems(filteredItems);
    }else {
      setSelectedItems( [ ...selectedItems, id ] )
    }
  }
  //enviar o point para a api
  //para na se direcionar para outra pagina, o tipo do event deve ser importado do react o FormEvent
 async function handleSubmit(event: FormEvent){
  event.preventDefault();



  const { name, email, whatsapp } = formData;
  const uf = selectedUf;
  const city = selectedCity;
  const [ latitude, longitude] = selectedPosition;
  const items = selectedItems;

  // como n podemos mas receber JSON
    // const data = {
  //   name,
  //   email,
  //   whatsapp,
  //   uf,
  //   city,
  //   latitude,
  //   longitude,
  //   items
  // };

  const data = new FormData();

    data.append('name', name);
    data.append('email', email);
    data.append('whatsapp', whatsapp);
    data.append('uf', uf);
    data.append('city', city);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('items', items.join(','));

    if(selectedFile)
      data.append('image', selectedFile);

  await api.post('points', data);

  alert("Point cadastrado com sucesso!")

  history.push('/');
 }

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Volta para home
        </Link>
      </header>

      <form  onSubmit={handleSubmit}>
        <h1>Cadastro do <br />ponto de coleta</h1>

        <Dropzone onFileUploaded={setSelectedFile}/>
 
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleImputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleImputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                onChange={handleImputChange}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          {/* essas sao as propriedades obrigatorias  */}
          {/* TileLayer é escolher qual design vai se utilizar  */}
          {/* a ´propriedade onClick para podemos add a opiçao de selecionar localidade*/}
          <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectedPosition} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">UF</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={handleSelectUf}
              >
                <option value="0">Selecione uma UF</option>
                {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select 
                name="city" 
                id="city"
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>

          <ul className="items-grid">
            {items.map(item => (
              // para o react ter uma propriedade unica de cada item para melhor encontra os elementos
              // se eu quero passa paramentros para uma função chama devo utilixa aerofuction
              <li 
                key={item.id} 
                onClick={() => handleSelectItem(item.id)}
                className = {selectedItems.includes(item.id) ? 'selected':''}
              >
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>

        <button type='submit'>
          Cadastrar ponto de coleta
        </button>
      </form>
    </div>
  );
};

export default CreatPoint;