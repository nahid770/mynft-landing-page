import React from 'react';

const NewsLetter = () => {
    return (
        <div data-aos-duration="3000" data-aos="fade-up" className='border border-[#cafc00f8] py-10 md:py-6 rounded-md mt-10 md:my-44'>
            <h2 className='text-3xl md:text-5xl font-poppins text-white text-center'>Join Our Newsletter</h2>
            <p className='text-md text-xl text-slate-300 font-poppins text-center mt-3'>Weekly Best NFT updates</p>
            <div className='flex items-center justify-center mt-10'>
                <input className='px-1 md:px-3 py-3 outline-none rounded-sm' type="email" name="email" id="" placeholder='Email address' required/>
                <button className='font-bold text-md md:text-lg font-poppins bg-[#cafc00f8] px-4 py-[12px] md:py-[10px]'>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;