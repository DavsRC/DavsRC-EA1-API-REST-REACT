import React, { useState, useEffect } from 'react'
import { getUsuarios } from '../../Services/UsuarioService'
import { UsuarioCard } from "./UsuarioCard"

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
            return <UsuarioCard key= {usuario._id} usuario={usuario}/>
          })
        }
    </div>
  </div>
  )
}