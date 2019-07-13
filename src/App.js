import React, {useState, useEffect, Fragment} from 'react';
import Formulario from "./Components/Formulario";


function App() {

  //STATES
  const [artista, setArtista] = useState('');
  const [letra, setLetra] = useState([]);
  const [info, agregarInfo] = useState({});


const consultLyrics = (busqueda) =>{
  console.log(busqueda);

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