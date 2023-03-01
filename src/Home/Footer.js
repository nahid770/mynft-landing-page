import React from 'react';

const Footer = () => {
    return (
        <div className='mt-16 md:mt-24 '>
             
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 md:gap-24 ml-5 md:ml-10 pb-8'>
                <div className=''>
                    <h2 className='text-xl font-bold text-[#C4F501] text-start mt-2 md:mt-2'>MYNFT</h2>
                    <p className='text-slate-300 text-xs text-start mt-4'>Copyright 2023- Dev Nahid All right reserved</p>
                </div>
                <div>
                    <h2 className='text-2xl text-white mb-4 '>About</h2>
                    <ul>
                        <li className='text-slate-300 text-sm font-poppins text-start py-1'>Contact us</li>
                        <li className='text-slate-300 text-sm font-poppins text-start py-1'>Features</li>
                        <li className='text-slate-300 text-sm font-poppins text-start py-1'>News & Blog</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl text-white mb-4'>Company</h2>
                    <ul>
                        <li className='text-slate-300 text-sm font-poppins py-1'>Why MYNFT?</li>
                        <li className='text-slate-300 text-sm font-poppins py-1'>Package</li>
                        <li className='text-slate-300 text-sm font-poppins py-1'>Security</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl text-white mb-4'>Support</h2>
                    <ul>
                        <li className='text-slate-300 text-sm font-poppins py-1'>FAQ</li>
                        <li className='text-slate-300 text-sm font-poppins py-1'>Support us</li>
                        <li className='text-slate-300 text-sm font-poppins py-1'>carrier</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;