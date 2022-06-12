import React, { useState, useEffect } from 'react'
import { getEstados } from '../../Services/EstadosService'
import {EstadosCard} from './EstadosCard'

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
            return <EstadosCard key= {estado._id} estado={estado}/>
          })
        }
    </div>
  </div>
  )
}
