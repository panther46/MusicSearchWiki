import React, {useState, useEffect, Fragment} from 'react';
import Formulario from "./Components/Formulario";
import axios from 'axios';
import Cancion from "./Components/Cancion";



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

      <div clasName = "container mt-5">
        <div className = "row">
          <div className = "col-md-6">
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