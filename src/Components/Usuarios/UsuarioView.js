import React, { useState, useEffect } from 'react'
import { getUsuarios } from '../../Services/UsuarioService'


export const UsuarioView = () => {

  const [usuarios, setUsuarios] = useState([]);

  const listarUsuarios = async () => {
    try{
      const {data} = await getUsuarios();
      setUsuarios(data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    listarUsuarios();
  },[]);

  listarUsuarios();


  return (
    <div className="container-fluid">
    <div className="row row-cols-1 row-cols-md-2 g-4">
        {
           usuarios.map((usuario) => {
            return (
              <div className="col" key={usuario._id}>
                <div className="card">
                  <img src={usuario.foto} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Nombre: {usuario.nombre}</h5>
                    <p className="card-text"> email: {usuario.email}</p>
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
