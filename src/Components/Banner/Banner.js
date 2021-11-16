import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className='banner'>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className=" d-flex ">
              <div className="container">
                <h2 className="primary-font-size">
                  Where Would You Like To Go?
                </h2>
                <h1 className="second-font-size">
                Unbelievable low prices <br></br>{" "}
                  <span className="theme-color">GLASSES </span> <br></br>
                  FOR MEN & WOMEN
                </h1>
                <Link className="btn btn-primary mt-4" to='/all_products'> More Products</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-overlay"></div>
    </div>
  );
};

export default Banner;
