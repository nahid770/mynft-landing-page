import React from 'react';
import binance from '../Images/binance.png'
import metamask from '../Images/metamask.png'
import paypal from '../Images/paypal.png'
import eth from '../Images/eth.png'
import coinbase from '../Images/coinbase.png'

const Wallets = () => {
    return (
        <div className='md:my-16'>
           
            <div className='flex flex-col md:flex-row justify-center items-center md:space-x-5 space-y-5 md:space-y-0'>
                <img className='md:w-44 w-32' src={binance} alt="" />
                <img className='md:w-44 w-32' src={metamask} alt="" />
                <img className='md:w-44 w-32' src={paypal} alt="" />
                <img className='md:w-44 w-32' src={eth} alt="" />
                <img className='md:w-44 w-32' src={coinbase} alt="" />
            </div>
           
        </div>
    );
};

export default Wallets;