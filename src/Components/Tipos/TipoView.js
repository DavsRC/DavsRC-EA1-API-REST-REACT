import React, { useState, useEffect } from 'react'
import { getTipos } from '../../Services/TiposService'

export const TipoView = () => {

  const [tipos, setTipos] = useState([]);

  const listarTipos = async () => {
    try{
      const {data} = await getTipos();
      setTipos(data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    listarTipos();
  },[]);

  listarTipos();

  return (
    <div className="container-fluid">
    <div className="row row-cols-1 row-cols-md-2 g-4">
        {
           tipos.map((tipo) => {
            return (
              <div className="col" key={tipo._id}>
                <div className="card">
                  <img src={tipo.foto} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Tipo: {tipo.nombre}</h5>
                    <p className="card-text"> estado: {tipo.estado}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
  </div>
  )
}
