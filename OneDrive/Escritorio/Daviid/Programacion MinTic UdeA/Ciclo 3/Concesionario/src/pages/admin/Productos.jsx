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
        <div></div>
    )
}

export default Productos;
