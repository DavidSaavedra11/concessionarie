import React from "react";
import ImagenLogo from "components/ImagenLogo";
import { Link } from "react-router-dom";
import useActiveRoute from "hooks/useActiveRoute";

const Sidebar = () => {
  return (
    <nav className="hidden md:flex md:w-72  border border-gray-500 h-full  flex-col bg-purple-700 p-4">
      <Link to="/admin">
        <ImagenLogo />
      </Link>

      <div className="my-4">
        <Ruta icono="fas fa-user" ruta="/admin/perfil" nombre="Perfil" />
        <Ruta
          icono="fas fa-motorcycle"
          ruta="/admin/productos"
          nombre="Productos"
        />
        <Ruta icono="fas fa-dollar-sign" ruta="/admin/ventas" nombre="Ventas" />
        <Ruta icono="fas fa-users" ruta="/admin/usuarios" nombre="Usuarios" />
      </div>
      <button
        className={`p-1 my-2  bg-green-200 hover:bg-green-500 flex w-full items-center text-black  rounded-lg `}
      >
        <i className={`fas fa-door-closed w-10`} />
        Cerrar Sesion
      </button>
    </nav>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {
  const isActive = useActiveRoute(ruta);
  return (
    <Link to={ruta}>
      <button
        className={`p-1 my-2  bg-${
          isActive ? "indigo" : "gray"
        }-600 hover:bg-indigo-700 flex w-full items-center text-white rounded-md `}
      >
        <i className={`${icono} w-10`} />
        {nombre}
      </button>
    </Link>
  );
};

export default Sidebar;
