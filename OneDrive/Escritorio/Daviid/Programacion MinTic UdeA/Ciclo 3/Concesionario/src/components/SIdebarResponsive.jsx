import React, { useState } from "react";
import { Link } from "react-router-dom";

const SIdebarResponsive = () => {
  const [mostrarNavegacion, setMostrarNavegacion] = useState(false);

  return (
    <div
      className="md:hidden"
      onClick={() => {
        setMostrarNavegacion(!mostrarNavegacion);
      }}
    >
      <i
        className={`mx-1 fas fa-${
          mostrarNavegacion ? "times" : "bars"
        } hover:text-green-600`}
      ></i>
      {mostrarNavegacion && (
        <ul className='bg-gray-900'>
          <ResponsiveRoute nombre="Productos" ruta="/admin/productos" />
          <ResponsiveRoute nombre="Ventas" ruta="/admin/ventas" />
          <ResponsiveRoute nombre="Usuarios" ruta="/admin/usuarios" />
        </ul>
      )}
    </div>
  );
};

const ResponsiveRoute = ({ ruta, nombre }) => {
  
return (
  <Link to={ruta}>
    <li className='text-gray-200 border border-gray-300 p-1'>{nombre}</li>
  </Link>
)
};

export default SIdebarResponsive;
