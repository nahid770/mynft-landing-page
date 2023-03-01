import React from 'react';
import wallet from '../Images/wallet.png'
import add from '../Images/add.png'
import box from '../Images/box.png'
import sell from '../Images/sell.png'
import { BsArrowRightCircle } from "react-icons/bs";

const Collections = () => {
    return (
        <div className=''>
            <h2 className='text-2xl md:text-4xl text-white font-bold mt-10 md:mt-0 text-center md:text-start'>Create and sell your NFT's</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 place-content-center'>
                <div data-aos-duration="1500" data-aos="fade-right" className='border border-[#CBFC00] p-2 bg-slate-900'>
                   
                    <img className='w-24' src={wallet} alt="" />
                    
                    <h2 className='text-xl md:text-2xl text-white'>Set up your wallet</h2>
                    <p className='text-white text-md py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus a commodi necessitatibus quibusdam saepe dolor.</p>
                    <BsArrowRightCircle className='text-[#CBFC00] w-6 h-6'></BsArrowRightCircle>
                </div>
                <div data-aos-duration="2000" data-aos="fade-right" className='border border-[#CBFC00] p-2 bg-slate-900'>
                   
                    <img className='w-24 ' src={box} alt="" />
                  
                    <h2 className='text-xl md:text-2xl text-white'>Create your collection</h2>
                    <p className='text-white text-md py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus a commodi necessitatibus </p>
                    <BsArrowRightCircle className='text-[#CBFC00] w-6 h-6'></BsArrowRightCircle>
                </div>
                <div data-aos-duration="2500" data-aos="fade-right" className='border border-[#CBFC00] p-2 bg-slate-900'>
                   
                    <img className='w-16 mb-5 ' src={add} alt="" />
                   
                    <h2 className='text-xl md:text-2xl text-white'>Add your NFT's</h2>
                    <p className='text-white text-md py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus a commodi necessitatibus quibusdam saepe dolor.</p>
                    <BsArrowRightCircle className='text-[#CBFC00] w-6 h-6'></BsArrowRightCircle>
                </div>
                <div data-aos-duration="3000" data-aos="fade-right" className='border border-[#CBFC00] p-2 bg-slate-900'>
                    
                    <img className='w-16 mb-4' src={sell} alt="" />
                    
                    <h2 className='text-xl md:text-2xl text-white'>Sell your NFT's</h2>
                    <p className='text-white text-md py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus a commodi necessitatibus quibusdam saepe dolor.</p>
                    <BsArrowRightCircle className='text-[#CBFC00] w-6 h-6'></BsArrowRightCircle>
                </div>
                
            </div>
        </div>
    );
};

export default Collections;