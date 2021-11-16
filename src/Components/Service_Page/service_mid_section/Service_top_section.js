/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Service_intro_data from "./Service_intro_data";


const Service_top_section = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Service_intro_data
              name="Free home delivery"
              img=''
              des="Sunglasses or sun glasses are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or Sunglasses or sun glasses are a form of protective eyewear designed."
            ></Service_intro_data>
          </div>
          <div className="col-md-4">
            <Service_intro_data
              name="Quality Products"
              img=''
              des="Promotions available online! Shop the greatest selection of designer sunglasses choosing among the most stylish brands like Ray-Ban, Oakley and more.Promotions available online! Shop the greatest selection of designer."
            ></Service_intro_data>
          </div>
          <div className="col-md-4">
            <Service_intro_data
              name="Gift Voucher"
              img=''
              des="Sunglasses not only elevate your sense of style but also protect your eyes from the harmful rays of the sun. Thus, they are an essential accessory for everySunglasses not only elevate your sense of style but also protect you,"
            ></Service_intro_data>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_top_section;
