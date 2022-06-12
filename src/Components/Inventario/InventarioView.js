import React, { useState, useEffect } from 'react'
import { getInventarios } from '../../Services/InventarioService'
import {InventarioCard} from './InventarioCard'

export const InventarioView = () => {

  const [inventarios, setInventarios] = useState([]);

  const listarInventarios = async () => {
    try{
      const {data} = await getInventarios();
      setInventarios(data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    listarInventarios();
  },[]);

  listarInventarios();

  return (
    <div className="container">
        <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
            {
               inventarios.map((inventario) => {
                return <InventarioCard key={inventario._id} inventario={inventario}/>
              })
            }
        </div>
      </div>
  )
}