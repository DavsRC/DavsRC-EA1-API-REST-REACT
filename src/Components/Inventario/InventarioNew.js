import React from "react";

export const InventarioNew = ({ handleOpenModal }) => {
  return (
    <div className="sideBar">
      <div className="container-fluiod">
        <div className="row">
          <div className="col">
            <div className="sidebar-header">
              <h3>Nuevo inventario</h3>
              <i class="fa-solid fa-xmark" onClick={handleOpenModal}></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
