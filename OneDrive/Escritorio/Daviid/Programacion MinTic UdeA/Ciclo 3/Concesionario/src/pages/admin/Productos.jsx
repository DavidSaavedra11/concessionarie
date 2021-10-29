import React, { useEffect, useState } from 'react'

const Productos = () => {
    const [nombreProducto, setNombreProducto] = useState('');

    useEffect(() => {
        console.log('Hola soy un use effect que se ejecuta solo una vez cuando la pagina se renderiza, por que tiene el array de dependencias vacio');
    }, []);

    useEffect(()=>{
        console.log('esto es una funcion que se ejecuta cada que cambia el valor de nombreProducto');
        console.log('El valor de la variable es', nombreProducto);
    },[nombreProducto]);

    const enviarDatosAlBackEnd=()=>{
        console.log("Se envio los datos al BackEnd");
    }

    return (
        <form className='flex flex-col'>
            <h2>Formulario de creacion de productos</h2>
            <input onChange={(e)=>{setNombreProducto(e.target.value)}} type="text" placeholder='Nombre del Producto'  />
            <input onChange={(e)=>{console.log('Marca: ', e.target.value)}} type="text" placeholder='Marca del Producto' />
            <input onChange={(e)=>{console.log('Modelo: ', e.target.value)}} type="text" placeholder='Modelo del producto' />
            <button type='button' onClick={enviarDatosAlBackEnd} className='bg-indigo-500 text-white'>Enviar Datos</button>

        </form>
    )
}

export default Productos;
