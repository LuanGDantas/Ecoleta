import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/'
});

export default api;
// não o utiliza o FETCH pois com axios eu consigo criar uma baseURL(se repete em todas as requisições)