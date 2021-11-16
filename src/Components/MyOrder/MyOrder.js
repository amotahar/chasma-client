import React from 'react';
import DashbordHeader from '../DashBord/DashbordHeder';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyOrderData from './MyOrderData';

const MyOrder = () => {
    return (
        <div>
            <DashbordHeader></DashbordHeader>
            
           
                <MyOrderData></MyOrderData>
            <Footer></Footer>
        </div>
    );
};

export default MyOrder;