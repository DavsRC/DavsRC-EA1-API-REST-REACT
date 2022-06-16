import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getInventariosId } from "../../Services/InventarioService";

export const InventarioUpdate = () => {
  const { inventarioId = '' } = useParams();
  console.log(inventarioId);

  const getInventario = async () => {
    try {
      const { data } = await getInventariosId(inventarioId);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      
  getInventario();
  console.log(inventarioId);
  },[inventarioId]); 

  return <div>InventarioUpdate</div>;
};
