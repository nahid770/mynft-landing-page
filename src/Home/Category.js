import React from 'react';
import type1 from '../Images/nft1.png'
import type2 from '../Images/nft2.jpg'
import type3 from '../Images/nft3.jpg'
import type4 from '../Images/nft4.jpg'
import type5 from '../Images/nft5.jpg'
import type6 from '../Images/nft6.png'

const Category = () => {
    return (
        <div>
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-white text-2xl '>Best Collections</h2>
                <p  className='text-md text-[#CBFC00] '>View all</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-10'>
            <div className='flex justify-center gap-5 items-center'>
                <img className='w-24 rounded-full' src={type1} alt="" />
                <div>
                    <h2 className='text-2xl font-poppins text-white '>Cubic Trud</h2>
                    <p className='text-[#CBFC00] text-lg font-poppins'>12 items</p>
                </div>
            </div>
            <div className='flex justify-center gap-5 items-center'>
                <img className='w-24 rounded-full' src={type2} alt="" />
                <div>
                    <h2 className='text-2xl font-poppins text-white '>Diamond Mac</h2>
                    <p className='text-[#CBFC00] text-lg font-poppins'>47 items</p>
                </div>
            </div>
            <div className='flex justify-center gap-5 items-center'>
                <img className='w-24 rounded-full' src={type3} alt="" />
                <div>
                    <h2 className='text-2xl font-poppins text-white '>Decoder Bob</h2>
                    <p className='text-[#CBFC00] text-lg font-poppins'>25 items</p>
                </div>
            </div>
            <div className='flex justify-center gap-5 items-center'>
                <img className='w-24 rounded-full' src={type4} alt="" />
                <div>
                    <h2 className='text-2xl font-poppins text-white '>Sky Skeleton</h2>
                    <p className='text-[#CBFC00] text-lg font-poppins'>40 items</p>
                </div>
            </div>
            <div className='flex justify-center gap-5 items-center'>
                <img className='w-24 rounded-full' src={type5} alt="" />
                <div>
                    <h2 className='text-2xl font-poppins text-white '> Diamond Ice</h2>
                    <p className='text-[#CBFC00] text-lg font-poppins'>37 items</p>
                </div>
            </div>
            <div className='flex justify-center gap-5 items-center'>
                <img className='w-24 rounded-full' src={type6} alt="" />
                <div>
                    <h2 className='text-2xl font-poppins text-white '>King Kong</h2>
                    <p className='text-[#CBFC00] text-lg font-poppins'>62 items</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Category;