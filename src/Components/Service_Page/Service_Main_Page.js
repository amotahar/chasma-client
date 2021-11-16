/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import UseAuth from '../../Hook/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Home/Services/Product';
import Services_page_data from '../Home/Services/Service_page_data';
import Service_top_section from './service_mid_section/Service_top_section';

const Service_Page = () => {
    const {user}=UseAuth();
    return (
        <div>
            <Header></Header>
            <Service_top_section></Service_top_section>
            <Services_page_data></Services_page_data>
            <Footer></Footer>
        </div>
    );
};

export default Service_Page;