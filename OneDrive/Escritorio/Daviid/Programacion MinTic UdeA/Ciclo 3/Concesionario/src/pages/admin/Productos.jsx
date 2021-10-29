import React, { useEffect, useState } from 'react'

const vehiculosBackEnd  = [
    {
        nombre: "Corolla",
        marca: "Toyota",
        modelo: 2014
    },
    {
        nombre: "Sandero",
        marca: "Renault",
        modelo: 2018
    },
    {
        nombre: "Chevrolet",
        marca: "Sony",
        modelo: 2021
    },
    {
        nombre: "Fiesta",
        marca: "Ford",
        modelo: 2021
    },
    {
        nombre: "Mazda 3",
        marca: "Mazda",
        modelo: 2019
    }
]


const Productos = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textBoton, setTextBoton] = useState('Ingresar nuevo producto');
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        // Obtener lista de productos
        setProductos(vehiculosBackEnd);
    }, []);

    useEffect(() => {
        if (mostrarTabla) {
            setTextBoton('Ingresar nuevo producto');
        } else {
            setTextBoton('Mostrar todos los productos');
        }
    }, [mostrarTabla]);
    return (
        <div className='flex h-full w-full flex-col items-start justify-center p-8'> 
            <div className='flex flex-col'>
                <h2 className='text-3xl font-extrabold text-gray-600'>Pagina de administracion de Productos</h2>
                <button onClick={() => { setMostrarTabla(!mostrarTabla) }} className='text-white bg-indigo-500 p-5 font-semibold rounded-xl m-6 w-30 self-start'>{textBoton}</button>
                {mostrarTabla ? <TablaProductos listaVehiculos={productos} /> : <FormularioCreacionProductos />}
            </div>
        </div>

    );
};

const TablaProductos = ({listaVehiculos}) => {
    return <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-extrabold text-gray-600'>Todos los vehiculos</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre del vehiculo</th>
                    <th>Marca del vehiculo</th>
                    <th>Modelo del vehiculo</th>
                </tr>
            </thead>
            <tbody>
                {listaVehiculos.map((vehiculo)=>{
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
};

const FormularioCreacionProductos = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-extrabold text-gray-600'>Crear Nuevo Producto</h2>
            <form action="">
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 ' type="text" />
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 ' type="text" />
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 ' type="text" />
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 ' type="text" />
                <button className='bg-green-400 col-span-2 p-2 rounded-full shadow-lg hover:bg-green-600 text-white font-semibold'  >Guardar producto</button>
            </form>
        </div>
    );
};

export default Productos;
