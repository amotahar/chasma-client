import React from "react";
import "./Blue_spase_data.css";
const Blue_spase_data = (props) => {
    const {img}=props;
  return (
    <div>
      <div className=" Blue_spase_data main_card text-center">
          <img className='img-fluid' src={img} alt="" />
      </div>
    </div>
  );
};

export default Blue_spase_data;
