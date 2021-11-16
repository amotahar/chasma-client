import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './log_sing.css'
import SingINFrom from './SingINFrom';
const SingIn_page = () => {
    return (
        <div>
            <Header></Header>
           <SingINFrom></SingINFrom>
            <Footer></Footer>
        </div>
    );
};

export default SingIn_page;