import Sidebar from 'components/Sidebar';
import SIdebarResponsive from 'components/SIdebarResponsive';
import React, { useEffect } from 'react'

const PrivateLayout = ({ children }) => {
    return (
        <div className='flex w-screen h-screen'>
            <div className='flex flex-col md:flex-row w-full h-full'>
                <Sidebar />
                <SIdebarResponsive/>
                <main className='flex w-full  overflow-y-scroll items-center justify-center'>
                    {children}
                </main>                
            </div>
        </div>
    )
}

export default PrivateLayout;
