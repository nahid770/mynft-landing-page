import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './Navber.css'

const Navber = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            {/* Desktop version */}
            <div className='md:flex justify-between items-center mt-8 hidden'>
                <h2 className='text-[#C4F501] font-bold text-2xl '>MYNFT</h2>
                <div>
                    <ul className='flex items-center h-16 gap-8'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About Us</Link></li>
                        <li><Link to={'/marketplace'}>Marketplace</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                    </ul>
                </div>
                <button className='bg-[#cbfc00] px-8 py-2 font-bold rounded-sm'>Register</button>
            </div>
            {/* Mobile Version */}
           <div>
            <div className='flex justify-between mt-8'>
                <h2 className='text-white font-bold text-2xl md:hidden'>MYNFT</h2>
                <div onClick={()=> setOpen(!open)}>
                    {
                        open ? <Icon className='text-white w-8 h-8 md:hidden ' icon="material-symbols:close-rounded" /> : <Icon className='text-white w-8 h-8 md:hidden ' icon="material-symbols:menu-rounded" />
                    }
                </div>
            </div>
            <div>
            <div className='flex flex-col items-center mt-8 md:hidden relative'>
               
                <div className=''>
                    <ul className={` gap-4 space-y-3 font-bold  absolute ${open ? 'top-1' : 'top-[-500px]' } bg-[#151331] py-10 px-10 rounded-md mr-10`}>
                        <li><Link className='text-white text-lg font-Poppins my-' to={'/'}>Home</Link></li>
                        <li><Link className='text-white text-lg font-Poppins my-2' to={'/about'}>About Us</Link></li>
                        <li><Link className='text-white text-lg font-Poppins my-2' to={'/marketplace'}>Marketplace</Link></li>
                        <li><Link className='text-white text-lg font-Poppins my-2' to={'/contact'}>Contact Us</Link></li>
                        <button className='bg-[#cbfc00] px-8 py-2 font-poppins text-lg  rounded-md'>Register</button>
                    </ul>
                    
                </div>
                
            </div>
            </div>
           </div>
        </div>
    );
};

export default Navber;