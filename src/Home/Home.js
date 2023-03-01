import React from 'react';
import Banner from './Banner';
import Wallets from './Wallets';
import Navber from './Navber';
import Collections from './Collections';
import Feature from './Feature';
import Category from './Category';
import NewItem from './NewItem';
import HowItWork from './HowItWork';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='mx-6 md:mx-40 lg:mx-46'>
            <Navber></Navber>
            <Banner></Banner>
            <Wallets></Wallets>
            <Collections></Collections>
            <Feature></Feature>
            <Category></Category>
            <NewItem></NewItem>
            <HowItWork></HowItWork>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;