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
    <div className="container">
    <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
           estados.map((estado) => {
            return <EstadosCard key= {estado._id} estado={estado}/>
          })
        }
    </div>
  </div>
  )
}
