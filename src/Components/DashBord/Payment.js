import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import DashbordHeader from './DashbordHeder';
import paymentImg from '../../img/payment.jpg'
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <DashbordHeader></DashbordHeader>
            
            <div className="container payment">
                <div className="row">
                    <div className="col-lg-6">
                        <img className='img-fluid' src={paymentImg} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="wrap">
                            <h4>Easy to Payment</h4>
                            <h2>Maecenas justo augue, blandit vitae leo non, faucibus</h2>
                            <p>Sunglasses - Buy Stylish goggles and sunglasses frames for online shopping in India. Choose from wide range of shades and goggles in various designs at the Sunglasses - Buy Stylish goggles and sunglasses frames for online shopping in India. Choose from wide range of shades and goggles in various designs at the</p>

                            

                            <Link className='btn btn-primary' to='order_place'>Payment Now</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Payment;