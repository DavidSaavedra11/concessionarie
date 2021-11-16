import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@material-ui/core";
import {
  obtenerVehiculos,
  crearVehiculo,
  editarVehiculo,
  eliminarVehiculo,
} from "utils/api";
import "react-toastify/dist/ReactToastify.css";

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textBoton, setTextBoton] = useState("Ingresar nuevo producto");
  const [colorBoton, setColorBoton] = useState("indigo");
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  // este UseEffect carga las lista de productos en la primera renderizacion
  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVehiculos(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setProductos(response.data);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

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
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
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
      </div>
      {mostrarTabla ? (
        <TablaProductos
          listaVehiculos={productos}
          setEjecutarConsulta={setEjecutarConsulta}
        />
      ) : (
        <FormularioCreacionProductos
          setMostrarTabla={setMostrarTabla}
          listaVehiculos={productos}
          setProductos={setProductos}
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
  );
};

const TablaProductos = ({ listaVehiculos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState(listaVehiculos);

  useEffect(() => {
    setProductosFiltrados(
      listaVehiculos.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaVehiculos]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        type="text"
        placeholder="Buscar"
        className=" my-3 border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500"
      />
      <h2 className="text-2xl font-extrabold text-gray-600">
        Todos los Productos
      </h2>

      <table className="tabla">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre del vehiculo</th>
            <th>Marca del vehiculo</th>
            <th>Modelo del vehiculo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((vehiculo) => {
            return (
              <FilaProducto
                key={nanoid()}
                vehiculo={vehiculo}
                setEjecutarConsulta={setEjecutarConsulta}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaProducto = ({ vehiculo, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoVehiculo, setInfoNuevoVehiculo] = useState({
    _id: vehiculo._id,
    nombre: vehiculo.nombre,
    marca: vehiculo.marca,
    modelo: vehiculo.modelo,
  });

  const actualizarVehiculo = async () => {
    // enviar la informacion al backend
    await editarVehiculo(
      vehiculo._id,
      {
        nombre: infoNuevoVehiculo.nombre,
        marca: infoNuevoVehiculo.marca,
        modelo: infoNuevoVehiculo.modelo,
      },
      (response) => {
        console.log(response.data);
        toast.success("Vehículo modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error("Error modificando el vehículo");
        console.error(error);
      }
    );
  };

  const deleteVehicle = async () => {
    await eliminarVehiculo(
      vehiculo._id,
      (response) => {
        console.log(response.data);
        toast.success("vehículo eliminado con éxito");
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando el vehículo");
      }
    );
    setOpenDialog(false);
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>{infoNuevoVehiculo._id}</td>
          <td>
            <input
              className="border border-gray-600 text-green-700 font-bold rounded-md p-1 m-0"
              type="text"
              value={infoNuevoVehiculo.nombre}
              onChange={(e) =>
                setInfoNuevoVehiculo({
                  ...infoNuevoVehiculo,
                  nombre: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="border border-gray-600 text-green-700 font-bold rounded-md p-1 m-0"
              type="text"
              value={infoNuevoVehiculo.marca}
              onChange={(e) =>
                setInfoNuevoVehiculo({
                  ...infoNuevoVehiculo,
                  marca: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="border border-gray-600 text-green-700 font-bold rounded-md p-1 m-0"
              type="number"
              value={infoNuevoVehiculo.modelo}
              onChange={(e) =>
                setInfoNuevoVehiculo({
                  ...infoNuevoVehiculo,
                  modelo: e.target.value,
                })
              }
            />
          </td>
        </>
      ) : (
        <>
          {}
          <td>{vehiculo._id.slice(20)}</td>
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
                  onClick={() => actualizarVehiculo()}
                  className="fas fa-check-circle text-green-600 hover:text-green-300 hover:bg-black bg-white rounded-lg"
                />
              </Tooltip>
              <Tooltip title="Cancelar edicion" arrow>
                <i
                  onClick={() => setEdit(!edit)}
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
                  onClick={() => setOpenDialog(true)}
                  className="fas fa-trash-alt hover:text-red-400"
                ></i>
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className="p-8 flex flex-col">
            <h1 className="text-gray-900 text-2xl font-bold">
              ¿Esta seguro que quiere eliminar el vehiculo?
            </h1>
            <div className="flex w-full justify-center my-4">
              <button
                onClick={() => deleteVehicle()}
                className="mx-4 px-4 py-2bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 border border-green-500 hover:border-transparent rounded shadow-xl "
              >
                Si
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className="mx-4 px-4 py-2bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 border border-red-500 hover:border-transparent rounded shadow-xl "
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

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current); //Segundo se instancia formData

    const nuevoVehiculo = {};
    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
    });

    await crearVehiculo(
      {
        nombre: nuevoVehiculo.nombre,
        marca: nuevoVehiculo.marca,
        modelo: nuevoVehiculo.modelo,
      },
      (response) => {
        console.log(response.data);
        toast.success("Vehículo agregado con éxito");
      },
      (error) => {
        console.error(error);
        toast.error("Error creando un vehículo");
      }
    );
    setMostrarTabla(true);
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
