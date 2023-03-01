import React from 'react';
import featured1 from '../Images/featured1.jpg'
import featured2 from '../Images/featured2.jpg'
import featured3 from '../Images/featured3.jpg'
import user1 from '../Images/user1.png'
import user2 from '../Images/user2.png'
import {BsThreeDots} from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai";

const Feature = () => {
    return (
        <div className='my-16 md:my-24 '>
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-white text-3xl '>Newest Item</h2>
                <p  className='text-md text-[#CBFC00] '>View all</p>
            </div>
            <div className='card-container w-full flex flex-col md:flex-row justify-center items-center gap-10 gap-y-10'>
                {/* card 1 */}
                <div data-aos-duration="1500" data-aos="fade-up" className='bg-slate-900 w-11/12 md:w-1/3'>
                    <img className='w-66 ' src={featured1} alt="" />
                  <div className='p-3'>
                  <div className='flex justify-between items-center'>
                        <img className='w-12 mt-1' src={user1} alt="" />
                        <BsThreeDots className=' text-slate-300 font-bold'></BsThreeDots>
                    </div>
                    <h2 className='text-white text-2xl mt-4'>Mountain Gorila</h2>
                    <h4 className='text-slate-300 text-md '>Highest bid 8/10</h4>

                    <div className='flex justify-between items-center mt-4'>
                        <h2 className='text-2xl  text-indigo-700'>1.90 ETH</h2>
                        <div className='flex justify-start gap-1 text-slate-300 items-center'>
                            <AiOutlineHeart className='text-[#CBFC00]'></AiOutlineHeart>
                            <p>100</p>
                        </div>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div data-aos-duration="1500" data-aos="fade-up" className='bg-slate-900 w-11/12 md:w-1/3'>
                    <img className='w-66 ' src={featured2} alt="" />
                  <div className='p-3'>
                  <div className='flex justify-between items-center'>
                        <img className='w-12 mt-1' src={user1} alt="" />
                        <BsThreeDots className='text-slate-300 font-bold'></BsThreeDots>
                    </div>
                    <h2 className='text-white  text-2xl mt-4'>Metaverse VR</h2>
                    <h4 className='text-slate-300 text-md '>Highest bid 8/10</h4>

                    <div className='flex justify-between items-center mt-4'>
                        <h2 className='text-2xl  text-indigo-700'>3.90 ETH</h2>
                        <div className='flex justify-start gap-1 text-slate-300 items-center'>
                            <AiOutlineHeart className='text-[#CBFC00]'></AiOutlineHeart>
                            <p>100</p>
                        </div>
                    </div>
                  </div>
                </div>
                {/*  card 3 */}
                <div data-aos-duration="1500" data-aos="fade-up" className='bg-slate-900 w-11/12 md:w-1/3'>
                    <img className='w-66 ' src={featured3} alt="" />
                  <div className='p-3'>
                  <div className='flex justify-between items-center'>
                        <img className='w-12 mt-1' src={user2} alt="" />
                        <BsThreeDots className='text-slate-300 font-bold'></BsThreeDots>
                    </div>
                    <h2 className='text-white  text-2xl mt-4'>Bitcoin Robot</h2>
                    <h4 className='text-slate-300 text-md '>Highest bid 8/10</h4>

                    <div className='flex justify-between items-center mt-4'>
                        <h2 className='text-2xl f text-indigo-700'>2.90 ETH</h2>
                        <div className='flex justify-start gap-1 text-slate-300 items-center'>
                            <AiOutlineHeart className='text-[#CBFC00]'></AiOutlineHeart>
                            <p>100</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;