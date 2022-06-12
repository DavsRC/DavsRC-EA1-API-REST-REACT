import React, { useState, useEffect } from 'react'
import { getEstados } from '../../Services/EstadosService'

export const EstadoView = () => {



  const [estados, setEstados] = useState([]);

  const listarEstados = async () => {
    try{
      const {data} = await getEstados();
      setEstados(data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    listarEstados();
  },[]);

  listarEstados();

  return (
    <div className="container-fluid">
    <div className="row row-cols-1 row-cols-md-2 g-4">
        {
           estados.map((estado) => {
            return (
              <div className="col" key={estado._id}>
                <div className="card">
                  <img src={estado.foto} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{estado.nombre}</h5>
                    <p className="card-text">{estado.estado}</p>
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
