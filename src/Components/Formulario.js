import React, {useState} from 'react';

function Formulario(props){

    // States Locales, busqueda
    const [busqueda, setBusqueda] = useState({
        artista:'',
        cancion:''
    })

    // Metodo para actualizar estado y leer datos de inputs. Como parametro un evento (e), se usa actualizador de estado, se incluye una copia de estado actual y se lee datos de formulario con .target
    const actualizarState = (e) =>{
        setBusqueda ({
            ...busqueda,
            [e.target.name] : e.target.value
            
        });
        console.log(busqueda);
    }

    // Metodo local para recibir de app.js metodo de consulta y enviar el request desde este componente
    const sendRequest = (e) =>{
        e.preventDefault();
        props.consultLyrics(busqueda);


    }


    return(
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form onSubmit = {sendRequest}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Music Search Wiki</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Nombre Artista"
                                        onChange={actualizarState} 
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Nombre Canción"
                                        onChange = {actualizarState} 
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right btn-custom">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
        
    )
}


export default Formulario;