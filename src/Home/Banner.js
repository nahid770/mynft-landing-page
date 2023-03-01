import React from 'react';
import banner from '../Images/banner.png'
import { BsArrowRight } from "react-icons/bs";
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex flex-col items-center md:flex-row-reverse md:gap-20  md:mt-8'>
            <div data-aos-duration="2500" data-aos="fade-up" className=''>
                <img   className='max-w-xs md:max-w-md ' src={banner} alt=""/>
            </div>

            <div data-aos="fade-right"  data-aos-duration="3000" className='mt-5 md:mt-0'> 
                <div className='px-5 md:px-0'>
                <h2 className='text-white text-3xl font-bold md:text-5xl text-center md:text-start'>Discover, collet & sell <span className='text-[#C2D60F] md:px-0 '>premium</span> NFTs</h2>
                </div>
                <p className='text-slate-300 mt-8 text-center  md:text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, esse odit deleniti ipsum autem distinctio!</p>
                
                    <div className='flex justify-center items-center mt-10 bg-[#CBFC00] w-40 md:w-42 mx-auto md:mx-0'>
                        <button className='py-2 banner-btn rounded-sm text-sm md:text-md font-bold'>Start collecting </button>
                        <BsArrowRight className='ml-2 '></BsArrowRight> 
                    </div>
                <div className='flex justify-center items-center md:gap-16 gap-10 p-1 bg-[#3e3f4641] rounded-sm w-88 md:max-w-md py-4 my-12 '>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-white font-bold md:text-2xl text-xl'>3,196</h2>
                        <p  className='text-[#cafc00fa] md:text-sm text-xs text-center font-bold'>Collection</p>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-white font-bold md:text-2xl text-xl'>1,390</h2>
                        <p className='text-[#cafc00f8] md:text-sm text-xs font-bold text-center'>Artist</p>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-white font-bold md:text-2xl text-xl '>8,250</h2>
                        <p className='text-[#cafc00f8] md:text-sm text-xs text-center font-bold'>NFT Artist</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;