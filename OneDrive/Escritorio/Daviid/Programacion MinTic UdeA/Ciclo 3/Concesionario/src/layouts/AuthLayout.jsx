import React from 'react'
import { Link } from 'react-router-dom';
import ImagenLogo from 'components/ImagenLogo';

const AuthLayout = ({ children }) => {
    return (
        <div className='bg-gray-200 min-h-screen flex flex-col items-center justify-center py-2 px-4 sm:px-6 lg:px-8'>
            AuthLayout
            <div className='w-full flex items-start'>
                <Link to='/'>
                    <i class="fas fa-home cursor-pointer hover:text-green-500"></i>
                </Link>
            </div>
            <div className='max-w-md w-full'>
                <ImagenLogo/>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;
