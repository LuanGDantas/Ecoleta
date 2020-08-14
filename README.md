# ![](https://github.com/LuanGDantas/Ecoleta/blob/master/assets/banner.png "Banner ecoleta")

<p align="center"'>
  <a href="#-sobre">Sobre</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;   
  <a href="#-tecnologias">Tecnologias</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;   
  <a href="#-como-utilizar">Como utilizar</a> 
</p>
                  
<p align="center"'>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/LuanGDantas/Ecoleta?color=%20purple">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/LuanGDantas/Ecoleta?color=purple">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/LuanGDantas/Ecoleta?color=purple">
  <a href="https://www.linkedin.com/in/luan-guilherme-dantas-3a57a3130/ ">
    <img alt="made by" src="https://img.shields.io/badge/made%20by-LuanGDantas-purple"> 
  </a>
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/LuanGDantas/Ecoleta?style=social">
</p>

***

## 🔖 Sobre
<p align="justify"'>
O Ecoleta é uma aplicação Web e Mobile com a finalidade de ajudar o meio ambiente, inspirada na Semana Internacional do Meio Ambiente que recetemente tinha sido comemorada.
</p> 
<p align="justify"'>                   
A finalidade do Ecoleta é estabelecer uma conexão entre empresas e/ou entidades que coletam resíduos (orgânicos e inorgânicos) às pessoas que necessitam descartar esses resíduos. Evitando o descarte inadequado do lixo, além de facilitar o processo de recliclagem e reutilização.
</p>  
<p align="justify"'>                             
A construção dessa aplicação foi iniciada na trilha Booster da Next Level Week #01 distribuída pela Rocketseat.
</p>  
                   
## 💻 Tecnologias
#### Website ([ReactJS][1] + [TypeScript][2])
- [CSS][3]
- [React Router Dom][4]
- [React Icons][5]
- [Axios][6]
- [React Leaflet][7]
- [React Dropzone][8]
#### Server ([NodeJS][9] + [TypeScript][2])
- [Express][10]
- [CORS][11]
- [KnexJS][12]
- [SQLite3][13]
- [ts-node][14]
- [Multer][15]
- [Celebrate][16]
- [Joi][17]
#### Mobile ([React Native][18] + [TypeScript][2])
- [Expo][19]
- [Expo Google Fonts][20]
- [React Navigation][21]
- [React Native Maps][22]
- [Expo Constants][23]
- [React Native SVG][24]
- [Axios][25]
- [Expo Location][26]
- [Expo Mail Composer][27]
## 🔨 Ferramentas
- [Visual Studio Code][28]
- [Figma][29]
- [Insomnia][30]
- [Google Fonts][31]
- [IBGE API][32]
- [Leaflet][33]
- [Feather Icons][34]
- [Font Awesome][35]

## 🔥 Como utilizar
<p align="justify"'>
Para clonar e executar este aplicativo, você precisará do Git , Node.js + yarn, ReactJS React Native18 (Expo) instalado no seu computador e caso deseje testa a aplicação mobile no seu celular faça o download do aplicativo do Expo.
</p>

#### Clone este repositório
```bash
# Clonando o repositório
$ git clone https://github.com/LuanGDantas/Ecoleta.git
```
#### Instalação e Inicialização da API
~~~shell
# Em um terminal abra o repositório da API 
$ cd ./Ecoleta/server

# Instalando as dependências do server
$ npm install

# Iniciando/Criando o banco de dados
npm run kmigrate

# Povoando o banco de dados (seeds)
npm run kseed

# Iniciar servidor no modo de desenvolvimento
$ npm run dev

# em execução na porta 3333
~~~
#### Instalando e executando a Aplicação Web (Front-end)
~~~shell
# Em outro terminal abra o repositório da Aplicação Web 
$ cd ./Ecoleta/web

# Instalando as dependências da aplicação
$ yarn install

# Inicializando o website no modo de desenvolvimento
$ yarn start

# em execução na porta 3000
~~~
#### Instalando e executando Mobile
~~~shell
# Em outro terminal abra o repositório da Aplicação Mobile
$ cd ./Ecoleta/mobile

# Instalando as dependências da aplicação
$ yarn install

# Iniciando a Expo, que abrirá um qrcode na página do terminal ou expo, basta verificar com o App da Expo ou emulador...
$ yarn start
 
# Se houver algum problema com as fontes, execute:
$ expo instale expo-font @ expo-google-fonts / ubuntu @ expo-google-fonts / roboto
~~~

## 📬 Entrar em contato!
<p align="center"'>
  <a href="https://www.linkedin.com/in/luan-guilherme-dantas-3a57a3130/" rel="nofollow">
    <img alt="Linkedin - Stefano Saffran" src="https://camo.githubusercontent.com/5a189abd87746872a77aaa7404a3748ad8585d5c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564696e2d2d2532334638393532443f7374796c653d736f6369616c266c6f676f3d6c696e6b6564696e" data-canonical-src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&amp;logo=linkedin" style="max-width:100%;">
  </a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="guilherme.luan2012@gmail.com">
    <img alt="E-mail - Stefano Saffran" src="https://camo.githubusercontent.com/0d6b8470c85771ff00c3d4449aac198c05e2e72a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f456d61696c2d2d2532334638393532443f7374796c653d736f6369616c266c6f676f3d676d61696c" data-canonical-src="https://img.shields.io/badge/Email--%23F8952D?style=social&amp;logo=gmail" style="max-width:100%;">
</a>
</p>

***

<p align="center"'>
Feito com ☕&❤️ por <a href="https://www.linkedin.com/in/luan-guilherme-dantas-3a57a3130/">Luan Dantas</a>
</p>


[1]: https://pt-br.reactjs.org/
[2]: https://www.typescriptlang.org/
[3]: https://developer.mozilla.org/pt-BR/docs/Web/CSS
[4]: https://reacttraining.com/react-router/web/guides/quick-start
[5]: https://github.com/react-icons/react-icons
[6]: https://github.com/axios/axios
[7]: https://react-leaflet.js.org/
[8]: https://github.com/react-dropzone/react-dropzone
[9]: https://nodejs.org/en/
[10]: https://expressjs.com/pt-br/
[11]: https://expressjs.com/en/resources/middleware/cors.html
[12]: https://knexjs.org/
[13]: https://github.com/mapbox/node-sqlite3
[14]: https://github.com/TypeStrong/ts-node
[15]: https://github.com/expressjs/multer
[16]: https://github.com/arb/celebrate
[17]: https://github.com/hapijs/joi
[18]: https://www.reactnative.com/
[19]: https://expo.io/
[20]: https://github.com/expo/google-fonts
[21]: https://reactnavigation.org/
[22]: https://github.com/react-native-community/react-native-maps
[23]: https://docs.expo.io/versions/latest/sdk/constants/
[24]: https://github.com/react-native-community/react-native-svg
[25]: https://github.com/axios/axios
[26]: https://docs.expo.io/versions/latest/sdk/location/
[27]: https://docs.expo.io/versions/latest/sdk/mail-composer/
[28]: https://code.visualstudio.com/
[29]: https://www.figma.com/
[30]: https://insomnia.rest/
[31]: https://fonts.google.com/
[32]: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1
[33]: https://leafletjs.com/
[34]: https://feathericons.com/
[35]: https://fontawesome.com/
[36]: https://yarnpkg.com/
[37]: https://www.npmjs.com/

