import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Blue_spase from './Blue_Spase/Blue_spase';
import './Home.css'
import Review from './Review/Review';
import Services from './Services/Product';
import ProductHome from './Services/ProductHome';
import Special_Section from './Special Section/Special_Section';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
             {/* <Services></Services> */}
             <ProductHome></ProductHome>
            <Blue_spase></Blue_spase>
           <Review></Review>
            <Special_Section></Special_Section>
            <Footer></Footer>
        </div>
    );
};

export default Home;