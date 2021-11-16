import React from "react";
import "./About.css";
import about_img from "../../img/banner-4.webp";
import about_img2 from "../../img/banner-3.webp";
import Service_top_section from "../Service_Page/service_mid_section/Service_top_section";
const About_section = () => {
  return (
    <div className="about_page">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6">
            <h3>About Us</h3>
            <h2>LATEST EYE <span className='theme-color'>GLASSES</span></h2>
            <br />

            <p>
            Eye chasmish are very important for thos whos have some difficult in their eye to see every hing clearly and perfectly Eye chasmish are very important for thos whos have some difficult in their eye to see every hing clearly and perfectly. Eye chasmish are very important for thos whos have some difficult.
            </p>
            

            <li>Ray Bune</li>
            <li>Rinosin Glasses</li>
            <li>Macro Melodi</li>
            <li>Oakley Glasses</li>
            <li>Bledent Glasses</li>
            <li>Movilark Raison</li>
          </div>
          <div className="col-lg-6 pt-5">
            <img className="img-fluid" src={about_img} alt="" />
          </div>
        </div>

        <div className="row">
            <Service_top_section></Service_top_section>
        </div>

        <div className="row mb-5 mt-5 pt-5">
        
          <div className="col-lg-6">
            <img className="img-fluid" src= {about_img2} alt="" />
          </div>
          <div className="col-lg-6">
            <h4 className='theme-color'>ARRIVLE SUNGLASSES</h4>
            <h2>Customize you chasmish</h2>
            <br />

            <p>
            Eye chasmish are very important for thos whos have some difficult. Eye chasmish are very important for thos whos have some difficult in their eye to see every hing clearly and perfectly.
            </p>
            
        <br />
      
        <a href="#" className='btn btn-primary btn-lg'>Learn More</a>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_section;
