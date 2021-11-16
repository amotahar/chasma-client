import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DashbordHeader from "./DashbordHeder";

const DashBord = () => {
  return (
    <div>
      <DashbordHeader></DashbordHeader>
      <div className="container DashBord text-center">
        <div className="row">
          <div className="col">
            <div className="wrap">
              <h2 className='text-danger font-weight-bold'>Hello This is Your DashBord!</h2>
              <p className=' font-weight-bold mt-4'>If you are an Admin you can Access This Website. Or if you are a Visitor you can see only you oder cration, payment and Purchase information.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBord;
