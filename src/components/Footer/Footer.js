import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="main_footer2">
      <div className="main_footer2 pt-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col">
              
              <span className="icon">
                <i className="m-2 fas fa-tablets"></i>
              </span>
              Letest Products
              <div className="info mt-3">
                <span className="details">
                  <i className="m-2 fas fa-map-marker-alt"></i>Kalihati, Tangail
                </span>
                <br />
                <span className="details">
                  <i className="m-2 fas fa-phone-alt"></i> +8801643559826
                </span>
                <br />
                <span className="details">
                  <i className="m-2 fas fa-at"></i> sourovpaul583@gmail.com
                </span>
                <br />
              </div>
            </div>

            <div className="col">
              
              <span className="icon">
                <i className="m-2 far fa-address-card"></i>
              </span>
              About
              <div className="row mt-3">
                <div className="col">
                  <img
                    width="100px"
                    className="rounded"
                    src="https://i.ibb.co/SR0TYvb/professional-camera-laptop.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <p className="pasa">
                    Firmwares' resolution selector allows the user to optionally lower the resolution, 
                  </p>
                </div>

                <div className="col">
                  <img
                    width="100px"
                    className="rounded"
                    src="https://i.ibb.co/ZXRrGZz/close-up-vintage-camera-white-background.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <p className="pasa">
                  The two major types of digital image sensor are CCD and CMOS.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              
              <span className="icon">
                <i className="m-2 fas fa-question-circle"></i>
              </span>
              Information
              <ul className="main_list mt-3">
                <li className="list">About</li>
                <li className="list">Products</li>
                <li className="list">Contact</li>
                <li className="list">Help & Support</li>
              </ul>
            </div>

            <div className="col">
              
              <span className="icon">
                <i className="m-2 fas fa-address-card"></i>
              </span>
              Queality
              <div className="row mt-3">
                <div className="col-6">
                  
                  <img
                    width="100px"
                    src=" https://image.freepik.com/free-photo/professional-camera-close-up-photographer-s-desktop-blurred-background_169016-10677.jpg"
                    className="footer_img"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  
                  <img
                    width="100px"
                    src="https://image.freepik.com/free-photo/film-projector-dark-background-close-up-old-retro-things-shoot-with-vintage-style-colors-toned_155003-32075.jpg"
                    className="footer_img"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  
                  <img
                    width="100px"
                    src="https://image.freepik.com/free-photo/vintage-photo-camera-composition_23-2148913941.jpg"
                    className="footer_img"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  
                  <img
                    width="100px"
                    src="https://i.ibb.co/GMhMg4x/Professional-camera-on-a-blurred-background-with-a-laptop-The-concept-of-working-with-photos-and-vid.jpg"
                    className="footer_img"
                    alt=""
                  />
                </div>
              </div>           

            </div>
           <div className="logos">
           <i className="m-2 fab fa-facebook"></i>
            <i className="m-2 fab fa-instagram"></i>
            <i className="m-2 fab fa-linkedin-in"></i>
            <i className="m-2 fab fa-twitter"></i>
           </div>
          </div>

          
        
          <hr className="hr"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
