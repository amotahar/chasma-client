import React from 'react';
import DashbordHeader from '../DashBord/DashbordHeder';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Home/Services/Product';
import Services from '../Home/Services/Product';


const AllProduct = () => {
    return (
        <div>
            <DashbordHeader></DashbordHeader>

            <div className="row ">
                <div className="col m-auto">
                    <h2 className='theme-color text-center mt-5'>All Our Offer!</h2>
                </div>
            </div>
            <Product></Product>
            {/* <ManageCard></ManageCard> */}


            <Footer></Footer>
        </div>
    );
};

export default AllProduct;