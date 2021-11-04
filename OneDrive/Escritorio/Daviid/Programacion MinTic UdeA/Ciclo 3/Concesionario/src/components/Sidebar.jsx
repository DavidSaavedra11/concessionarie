import React from 'react'
import TriggerDarkMode from './TriggerDarkMode';

const Sidebar = () => {
    return (
        <nav className='w-72 border border-gray-500 h-full flex flex-col justyfy-between'>
            Sidebar
            <TriggerDarkMode/>
        </nav>
    )
}

export default Sidebar;
