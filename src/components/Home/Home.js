import React from 'react';
import Header from '../Header/Header/Header';
import SectionOne from '../SectionOne/SectionOne';
import TenProduct from '../TenProduct/TenProduct';
import Banner from './../Banner/Banner';
import Footer from './../Footer/Footer';
import Ads from './../Ads/Ads';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <SectionOne></SectionOne>
            <TenProduct></TenProduct>
            <Ads></Ads>
            <Footer></Footer>
        </div>
    );
};

export default Home;