import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const vehiculosBackEnd = [
  {
    nombre: "Corolla",
    marca: "Toyota",
    modelo: 2014,
  },
  {
    nombre: "Sandero",
    marca: "Renault",
    modelo: 2018,
  },
  {
    nombre: "Chevrolet",
    marca: "Sony",
    modelo: 2021,
  },
  {
    nombre: "Fiesta",
    marca: "Ford",
    modelo: 2021,
  },
  {
    nombre: "Mazda 3",
    marca: "Mazda",
    modelo: 2019,
  },
];

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [textBoton, setTextBoton] = useState("Ingresar nuevo producto");
  const [productos, setProductos] = useState([]);
  const [colorBoton, setColorBoton] = useState("indigo");

  // este UseEffect carga las lista de productos en la primera renderizacion
  useEffect(() => {
    // Obtener lista de productos
    setProductos(vehiculosBackEnd);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextBoton("Ingresar nuevo producto");
      setColorBoton("indigo");
    } else {
      setTextBoton("Mostrar todos los productos");
      setColorBoton("green");
    }
  }, [mostrarTabla]);
  return (
    <div className="flex h-full w-full flex-col items-start justify-center p-8">
      <div className="flex flex-col w-full justify-center">
        <h2 className="text-3xl font-extrabold text-gray-600 flex justify-center">
          Pagina de administracion de Productos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-400 p-5 font-semibold rounded-xl m-6 w-30 self-start`}
        >
          {textBoton}
        </button>
        {mostrarTabla ? (
          <TablaProductos listaVehiculos={productos} />
        ) : (
          <FormularioCreacionProductos
            funcionParaMostrarLaTabla={setMostrarTabla}
            funcionParaAgregarUnVehiculo={setProductos}
            listaVehiculos={productos}
          />
        )}

        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

const TablaProductos = ({ listaVehiculos }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-600">
        Todos los vehiculos
      </h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del vehiculo</th>
            <th>Marca del vehiculo</th>
            <th>Modelo del vehiculo</th>
          </tr>
        </thead>
        <tbody>
          {listaVehiculos.map((vehiculo) => {
            return (
              <tr>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioCreacionProductos = ({
  funcionParaMostrarLaTabla,
  listaVehiculos,
  funcionParaAgregarUnVehiculo,
}) => {
  const [nombre, setNombre] = useState();
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();

  const enviarAlBackend = () => {
    console.log("nombre", nombre, "marca", marca, "modelo", modelo);
    toast.success("Vehiculo guardo con exito", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    funcionParaMostrarLaTabla(true);
    funcionParaAgregarUnVehiculo([
      ...listaVehiculos,
      { nombre: nombre, marca: marca, modelo: modelo },
    ]);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-600">
        Crear Nuevo Producto
      </h2>
      <form className="flex flex-col">
        <label className="flex flex-col" htmlFor="nombre">
          Marca del vehiculo
          <input
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            value={nombre}
            name="nombre"
            type="text"
            placeholder="Kawasaki Ninja 400"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 "
          />
        </label>
        <label className="flex flex-col" htmlFor="marca">
          Marcar del Vehiculo
          <select
            onChange={(e) => {
              setMarca(e.target.value);
            }}
            value={marca}
            name="marca"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 "
          >
            <option disabled value="">
              Seleccione una opcion
            </option>
            <option>KAWASAKI</option>
            <option>YAMAHA</option>
            <option>PULSAR</option>
            <option>HONDA</option>
            <option>KTM</option>
            <option>AKT</option>
          </select>
        </label>
        <label className="flex flex-col" htmlFor="modelo">
          Modelo del vehiculo
          <input
            onChange={(e) => {
              setModelo(e.target.value);
            }}
            value={modelo}
            name="modelo"
            type="number"
            min="1992"
            max="2022"
            placeholder="2022"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 "
          />
        </label>

        <button
          onClick={() => {
            enviarAlBackend();
          }}
          type="button"
          className="bg-green-400 col-span-2 p-2 rounded-full shadow-lg hover:bg-green-600 text-white font-semibold"
        >
          Guardar producto
        </button>
      </form>
    </div>
  );
};

export default Productos;
