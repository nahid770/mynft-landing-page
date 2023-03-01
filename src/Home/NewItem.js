import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import nft1 from '../Images/nft1.png'
import nft2 from '../Images/nft2.jpg'
import nft3 from '../Images/nft3.jpg'
import nft4 from '../Images/nft4.jpg'
import nft5 from '../Images/nft5.jpg'
import nft6 from '../Images/nft6.png'
import user1 from '../Images/user1.png'

const NewItem = () => {
    return (
        <div className='my-16 md:my-24'>
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-white text-2xl '>Newest Items</h2>
                <p  className='text-md text-[#CBFC00] '>filter</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-10'>
                {/* Cards 1*/}
                <div className='bg-slate-900 '>
                    <img className='w-66 ' src={nft1} alt="" />
                  <div className='p-3'>
                  <div className='flex justify-between items-center'>
                        <img className='w-12 mt-1' src={user1} alt="" />
                        <BsThreeDots className='text-slate-300 font-bold'></BsThreeDots>
                    </div>
                    <h2 className='text-white  text-2xl mt-4'>Cubic Trud</h2>
                    <h4 className='text-slate-300 text-md '>Highest bid 9/10</h4>

                    <div className='flex justify-between items-center mt-4'>
                        <h2 className='text-2xl  text-indigo-700'>9.00 ETH</h2>
                        <div className='flex justify-start gap-1 text-slate-300 items-center'>
                            <AiOutlineHeart className='text-[#CBFC00]'></AiOutlineHeart>
                            <p>100</p>
                        </div>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className='bg-slate-900 '>
                    <img className='w-66 ' src={nft2} alt="" />
                  <div className='p-3'>
                  <div className='flex justify-between items-center'>
                        <img className='w-12 mt-1' src={user1} alt="" />
                        <BsThreeDots className='text-slate-300 font-bold'></BsThreeDots>
                    </div>
                    <h2 className='text-white  text-2xl mt-4'>Diamond Mac</h2>
                    <h4 className='text-slate-300 text-md '>Highest bid 8/10</h4>

                    <div className='flex justify-between items-center mt-4'>
                        <h2 className='text-2xl  text-indigo-700'>5.00 ETH</h2>
                        <div className='flex justify-start gap-1 text-slate-300 items-center'>
                            <AiOutlineHeart className='text-[#CBFC00]'></AiOutlineHeart>
                            <p>100</p>
                        </div>
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className='bg-slate-900 '>
                    <img className='w-66 ' src={nft3} alt="" />
                  <div className='p-3'>
                  <div className='flex justify-between items-center'>
                        <img className='w-12 mt-1' src={user1} alt="" />
                        <BsThreeDots className='text-slate-300 font-bold'></BsThreeDots>
                    </div>
                    <h2 className='text-white  text-2xl mt-4'>Decoder BoB</h2>
                    <h4 className='text-slate-300 text-md '>Highest bid 5/10</h4>

                    <div className='flex justify-between items-center mt-4'>
                        <h2 className='text-2xl  text-indigo-700'>2.90 ETH</h2>
                        <div className='flex justify-start gap-1 text-slate-300 items-center'>
                            <AiOutlineHeart className='text-[#CBFC00]'></AiOutlineHeart>
                            <p>100</p>
                        </div>
                    </div>
                  </div>
                </div>
                {/* Card 4 */}
                <div className='bg-slate-900 '>
                    <img className='w-66 ' src={nft4} alt="" />
                  <div className='p-3'>
                  <div className='flex justify-between items-center'>
                        <img className='w-12 mt-1' src={user1} alt="" />
                        <BsThreeDots className='text-slate-300 font-bold'></BsThreeDots>
                    </div>
                    <h2 className='text-white  text-2xl mt-4'>Sky Skeleton</h2>
                    <h4 className='text-slate-300 text-md '>Highest bid 4/10</h4>

                    <div className='flex justify-between items-center mt-4'>
                        <h2 className='text-2xl  text-indigo-700'>1.90 ETH</h2>
                        <div className='flex justify-start gap-1 text-slate-300 items-center'>
                            <AiOutlineHeart className='text-[#CBFC00]'></AiOutlineHeart>
                            <p>100</p>
                        </div>
                    </div>
                  </div>
                </div>
                {/* Card 5 */}
                <div className='bg-slate-900 '>
                    <img className='w-66 ' src={nft5} alt="" />
                  <div className='p-3'>
                  <div className='flex justify-between items-center'>
                        <img className='w-12 mt-1' src={user1} alt="" />
                        <BsThreeDots className='text-slate-300 font-bold'></BsThreeDots>
                    </div>
                    <h2 className='text-white  text-2xl mt-4'>Ice Dude</h2>
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
                {/* Card 6 */}
                <div className='bg-slate-900 '>
                    <img className='w-66 ' src={nft6} alt="" />
                  <div className='p-3'>
                  <div className='flex justify-between items-center'>
                        <img className='w-12 mt-1' src={user1} alt="" />
                        <BsThreeDots className='text-slate-300 font-bold'></BsThreeDots>
                    </div>
                    <h2 className='text-white  text-2xl mt-4'>King Kong</h2>
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
            </div>
        </div>
    );
};

export default NewItem;