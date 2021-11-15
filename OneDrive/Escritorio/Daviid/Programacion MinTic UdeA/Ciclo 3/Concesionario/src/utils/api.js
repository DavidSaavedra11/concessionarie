import axios from "axios";

export const obtenerProducto = async (setVehiculos, setEjecutarConsulta=()=>{}) => {
  const options = { method: "GET", url: "http://localhost:5000/productos/" };
  await axios
    .request(options)
    .then(function (response) {
      setVehiculos(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};

export const obtenerUsuarios = async (
  setVehiculos,
  setEjecutarConsulta = () => {}
) => {
  const options = { method: "GET", url: "http://localhost:5000/usuarios/" };
  await axios
    .request(options)
    .then(function (response) {
      setVehiculos(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};

