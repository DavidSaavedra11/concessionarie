import { nanoid } from "nanoid";
import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, Tooltip } from "@material-ui/core";

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
            setMostrarTabla={setMostrarTabla}
            setProductos={setProductos}
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
    <div className="flex flex-col items-center justify-center w-full">
      
      <h2 className="text-2xl font-extrabold text-gray-600">
        Todos los Prodcutos
      </h2>

      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre del vehiculo</th>
            <th>Marca del vehiculo</th>
            <th>Modelo del vehiculo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaVehiculos.map((vehiculo) => {
            return <FilaProducto key={nanoid()} vehiculo={vehiculo} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaProducto = ({ vehiculo }) => {
  const [edit, setEdit] = useState(false);
  const [openDialogo, setOpenDialogo] = useState(false);

  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    name: vehiculo.nombre,
    marca: vehiculo.marca,
    modelo: vehiculo.modelo,
  });

  const actualizarProducto = () => {
    console.log(infoNuevoProducto);
    // enviar la informacion al backend
  };

  const eliminarProducto = () => {
    console.log(
      "Se elimino un producto, codigo de axios para eliminar en el backend"
    );
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              className="border border-gray-600 text-green-700 font-bold rounded-md p-1 m-0"
              type="text"
              value={infoNuevoProducto.name}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  nombre: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="border border-gray-600 text-green-700 font-bold rounded-md p-1 m-0"
              type="text"
              value={infoNuevoProducto.marca}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  marca: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="border border-gray-600 text-green-700 font-bold rounded-md p-1 m-0"
              type="number"
              value={infoNuevoProducto.modelo}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  modelo: e.target.value,
                })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{vehiculo.nombre}</td>
          <td>{vehiculo.marca}</td>
          <td>{vehiculo.modelo}</td>
        </>
      )}
      <td>
        <div className="flex w-full justify-around">
          {edit ? (
            <>
              <Tooltip title="Confirmar edicion" arrow>
                <i
                  onClick={() => actualizarProducto()}
                  className="fas fa-check-circle text-green-600 hover:text-green-300 hover:bg-black bg-white rounded-lg"
                />
              </Tooltip>
              <Tooltip title="Cancelar edicion" arrow>
                <i
                  onClick={() => actualizarProducto()}
                  className="fas fa-ban text-red-600 hover:text-red-300 hover:bg-black bg-white rounded-lg"
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Editar Producto" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-edit hover:text-yellow-300"
                ></i>
              </Tooltip>
              <Tooltip title="Eliminar Producto" arrow>
                <i
                  onClick={() => setOpenDialogo(true)}
                  className="fas fa-trash-alt hover:text-red-400"
                ></i>
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialogo}>
          <div className="p-8 flex flex-col">
            <h1 className="text-gray-900 text-2xl font-bold">
              ¿Esta seguro que quiere eliminar el vehiculo?
            </h1>
            <div className="flex w-full justify-center my-4">
              <button
                onClick={() => {
                  eliminarProducto();
                  setOpenDialogo(false);
                }}
                className="mx-4 px-4 py-2bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded shadow-xl "
              >
                Si
              </button>
              <button
                onClick={() => setOpenDialogo(false)}
                className="mx-4 px-4 py-2bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded shadow-xl "
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  ); //Aca Usamos la libreria nanoid para asignar un codigo unico a los tr
};

const FormularioCreacionProductos = ({
  setMostrarTabla,
  listaVehiculos,
  setProductos,
}) => {
  const form = useRef(null); // para capturar los valores del formulario; primero se declara useRef
  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current); //Segundo se instancia formData

    const nuevoVehiculo = {};
    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
    });

    setMostrarTabla(true);
    setProductos([...listaVehiculos, nuevoVehiculo]);

    toast.success("Vehiculo Agregado con exito");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-600">
        Crear Nuevo Producto
      </h2>
      <form ref={form} onSubmit={submitForm} className="flex flex-col">
        <label className="flex flex-col" htmlFor="nombre">
          Marca del vehiculo
          <input
            name="nombre"
            type="text"
            placeholder="Kawasaki Ninja 400"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 "
            required
          />
        </label>
        <label className="flex flex-col" htmlFor="marca">
          Marcar del Vehiculo
          <select
            name="marca"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 "
            required
            defaultValue={0}
          >
            <option disabled value={0}>
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
            name="modelo"
            type="number"
            min="1992"
            max="2022"
            placeholder="2022"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 "
            required
          />
        </label>

        <button
          type="submit"
          className="bg-green-400 col-span-2 p-2 rounded-full shadow-lg hover:bg-green-600 text-white font-semibold"
        >
          Guardar producto
        </button>
      </form>
    </div>
  );
};

export default Productos;
