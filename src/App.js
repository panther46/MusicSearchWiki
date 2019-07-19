import React, {useState, useEffect, Fragment} from 'react';
import Formulario from "./Components/Formulario";
import axios from 'axios';



function App() {

  //STATES
  const [artista, setArtista] = useState('');
  const [letra, setLetra] = useState([]);
  const [info, agregarInfo] = useState({});

// Metodo de consulta de Lyrics.
const consultLyrics = async (busqueda) => {
  const {artista, cancion} = busqueda;
  const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

  // consulta de API

  const resultado = await axios(url);
  
  setLetra(resultado.data.lyrics);

}



  return (
    <Fragment>
      <Formulario
      consultLyrics = {consultLyrics} 
      />

    </Fragment>
  )

}


export default App;