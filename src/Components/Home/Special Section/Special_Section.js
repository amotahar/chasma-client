/* eslint-disable react/jsx-pascal-case */
import React from "react";
import './Speciel_section.css'
import img from '../../../img/pexels-yuri-manei-2272854.jpg'
import icon_bar from "../../../image/title_separate.png";
import Blue_spase_data from "../Blue_Spase/Blue_spase_data";
const Special_Section = () => {
  return (
    <div className='Speciel_section'>
      <div className="container mt-5 ">
        <div className="text-center mb-5">
          <h2 className='text-light'>ALL  <span className='theme-color'>FEATURED</span> GLASSES </h2>
          <img src={icon_bar} alt="" />
          <h4 className='w-75 m-auto text-light'>Eye chasmish are very important for thos whos have some difficult in their eye to see every hing clearly and perfectly</h4>
        </div>


        <div className="row mt-5 pt-5">
         
          <div className="col-md-6 ">
            <div className="wrap">
              <h2 className=' text-light pb-4'>Easy To Find <span className='theme-color'>Quality</span>  Eyeglasses </h2>
              <p className=' text-light'> Eye chasmish are very important for thos whos have some difficult. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue lorem upsum dolor site blandit tempus porttitor.</p>

              <div className='mt-3'>
                <ul >
                  <li className='text-light'>Get The Best Protection For Your Eyes With Digital Block Lenses</li>
                  <li className='text-light'>Top Eyewear Trends For 2019- The Most Iconic Glasses & Sunglasses</li>
                  <li className='text-light'>Why Are Multifocals So Expensive? Save Money By Shopping Online</li>
                </ul>
              </div>
              <button className='btn btn-primary mt-2'>Create Your Happiness!</button>
              
            </div>
          </div>

          <div className="col-md-6">
            <div className="img">
              <img className='img-fluid' src={img} alt="" />
            </div>
           
          </div>
         
        </div>
      </div>
      
    </div>
  );
};

export default Special_Section;
