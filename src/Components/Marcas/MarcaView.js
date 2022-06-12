import React, { useState, useEffect } from "react";
import { getMarcas } from "../../Services/MarcasService";
import { MarcaCard } from "./MarcaCard"

export const MarcaView = () => {
  const [marcas, setMarcas] = useState([]);

  const listarMarcas = async () => {
    try {
      const { data } = await getMarcas();
      setMarcas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarMarcas();
  }, []);

  listarMarcas();

  return (
    <div className="container-fluid">
    <div className="row row-cols-1 row-cols-md-2 g-4">
        {
           marcas.map((marca) => {
            return <MarcaCard key= {marca._id} marca={marca}/>
          })
        }
    </div>
  </div>
  )
}