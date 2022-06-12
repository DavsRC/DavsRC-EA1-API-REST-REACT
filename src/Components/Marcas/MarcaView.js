import React, { useState, useEffect } from 'react'
import { getMarcas } from '../../Services/MarcasService'

export const MarcaView = () => {

  const [marcas, setMarcas] = useState([]);

  const listarMarcas = async () => {
    try{
      const {data} = await getMarcas();
      setMarcas(data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    listarMarcas();
  },[]);

  listarMarcas();


  return (
    <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {
               marcas.map((marca) => {
                return (
                  <div className="col" key={marca._id}>
                    <div className="card">
                      <img src={marca.foto} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Marca: {marca.nombre}</h5>
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
