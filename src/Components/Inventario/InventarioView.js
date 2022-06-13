import React, { useState, useEffect } from "react";
import { getInventarios } from "../../Services/InventarioService";
import { InventarioCard } from "./InventarioCard";
import { InventariosNew } from "./InventariosNew";

export const InventarioView = () => {
  const [inventarios, setInventarios] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const listarInventarios = async () => {
    try {
      const { data } = await getInventarios();
      setInventarios(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarInventarios();
  }, []);

  const handleOpenModal = () =>{
    setOpenModal(!openModal)
  }

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {inventarios.map((inventario) => {
          return (
            <InventarioCard key={inventario._id} inventario={inventario} />
          );
        })}
      </div>
      {openModal ? <InventariosNew /> : 
        (<button className="btn btn-primary fab" onClick={handleOpenModal}>
          <i className="fa-solid fa-plus"></i>
        </button>)
      }
    </div>
  );
};
