import React, {useState} from 'react';

function Formulario(){

    // States Locales, busqueda
    const [busqueda, setBusqueda] = useState({
        artista:'',
        cancion:''
    })

    // Metodo para actualizar estado y leer datos de inputs
    const actualizarState = (e) =>{
        setBusqueda ({
            ...busqueda,
            [e.target.name] : e.target.value
            
        });
        console.log(busqueda);
    }


    return(
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form 
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