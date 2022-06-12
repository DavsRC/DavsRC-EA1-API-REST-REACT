import React, { useState, useEffect } from 'react'
import { getTipos } from '../../Services/TiposService'
import { TipoCard } from "./TipoCard"

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
            return <TipoCard key= {tipo._id} tipo={tipo}/>
          })
        }
    </div>
  </div>
  )
}