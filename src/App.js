import React, {useState, useEffect, Fragment} from 'react';
import Formulario from "./Components/Formulario";
import axios from 'axios';
import Cancion from "./Components/Cancion";
import Informacion from "./Components/Informacion";



function App() {

  //STATES
  const [artista, setArtista] = useState('');
  const [letra, setLetra] = useState([]);
  // Estado de Segunda Api informativa
  const [info, agregarInfo] = useState({});

// Metodo de consulta de Lyrics de canciones.
const consultLyrics = async (busqueda) => {
  const {artista, cancion} = busqueda;
  const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

  // consulta de API

  const resultado = await axios(url);

  // Almacenar artista que viene de destructuring de estado artista de formulario (no de este componente).
  setArtista(artista);
  // Almacenar la letra en el estado.
  setLetra(resultado.data.lyrics);
  

}

// Metodo para consultar API de informacion de cancion

const consultarApiInfo = async () => {
  if (artista){
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

    const resultado = await axios(url);
  
    agregarInfo(resultado.data.artists[0]);
    console.log(info);

  }
 
}

// actua como el component didmount en este caso con la dependencia de "artista" cuando haya un cambio en el estado artista se ejecutara de nuevo la funcion
// este metodo actua como "callback" se ejecuta cuando el componente esta cargado y hay un cambio en el state "artista" declarado como dependencia.
// No es recomendable llamar al metodo manualmente desde otro metodo, es necesario llamarlo bajo un callback. 
useEffect(
  () => {
    consultarApiInfo();
    // eslint-disable-next-line
  }, [artista]);




  return (
    <Fragment>
      <Formulario
      consultLyrics = {consultLyrics} 
      />

      <div className = "container mt-5">
        <div className = "row">
          <div className = "col-md-6">
            <Informacion 
            info = {info}
            />
          </div>
          <div className = "col-md-6">
            <Cancion
            letra = {letra} 
            />
          </div>
        </div>

      </div>

    </Fragment>
  )

}


export default App;