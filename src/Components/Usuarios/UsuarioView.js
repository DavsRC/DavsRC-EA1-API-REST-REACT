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
    <div className="container">
    <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
           usuarios.map((usuario) => {
            return <UsuarioCard key= {usuario._id} usuario={usuario}/>
          })
        }
    </div>
  </div>
  )
}