import React from 'react'
import ImagenLogo from 'components/ImagenLogo'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
            <nav className='hidden md:flex md:w-72  border border-gray-500 h-full  flex-col bg-gray-300 p-4' >
                <Link to='/admin'>
                    <ImagenLogo/>
                </Link>

                <div className='my-4'>
                <Ruta icono ='fas fa-user' ruta='/admin/perfil' nombre='Perfil'/>
                <Ruta icono ='fas fa-motorcycle' ruta='/admin/productos' nombre='Productos'/>
                <Ruta icono ='fas fa-dollar-sign' ruta='/admin/ventas' nombre='Ventas'/>
                <Ruta icono ='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios'/> 
                </div>

                <Ruta icono ='fas fa-door-closed' ruta='/admin' nombre='Cerrar Sesion'/>
            </nav>
    )
}

const Ruta = ({icono,ruta,nombre}) => {
    return (
        <Link to={ruta}> 
            <button className='p-1 my-2  bg-indigo-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md '>
                <i className={`${icono} w-10`}/>
                {nombre}
            </button>
        </Link> 
    )
}


export default Sidebar;
