import React, {useState, useEffect, Fragment} from 'react';
import Formulario from "./Components/Formulario";


function App() {

  //STATES
  const [artista, setArtista] = useState('');
  const [letra, setLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  return (
    <Fragment>
      <Formulario/>

    </Fragment>
  )

}


export default App;