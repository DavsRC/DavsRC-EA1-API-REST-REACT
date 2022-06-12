import React from "react";

export const InventarioCard = (props) => {

const{inventario} = props;

  return (
    <div className="col" key={inventario._id}>
      <div className="card">
        <img src={inventario.foto} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">Especificaciones</h4>
          <hr />
          <h5 className="card-title">Serial: {inventario.serial}</h5>
          <h5 className="card-title">Marca: {inventario.marca.nombre}</h5>
          <h5 className="card-title">Nombre: {inventario.usuario.nombre}</h5>
        </div>
      </div>
    </div>
  );
};
