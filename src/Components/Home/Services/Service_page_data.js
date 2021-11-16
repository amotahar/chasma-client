import React from "react";
import "./Services.css";
import title_separate from "../../../image/title_separate.png";
import { useEffect } from "react";
import { useState } from "react";
import Service_card from "./Product_card";

const Services_page_data = () => {
  const [data, setData] = useState([]);
  const url = "Service_Data.JSON";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  const sliceData = data.slice(1, 7)
  return (
    <div className="container pt-5 Services">
      <div className="row">
        <div className="col text-center">
          <h2>
            We Offer Different{" "}
            <span className="heading_style_color">Services</span> To Improve
            Your Health
          </h2>
          <img src={title_separate} alt="" />
          <p className="w-75 m-auto">
            Get energizing workout moves, healthy recipes, and advice on losing
            weight and feeling great from Health.com. Find out how to manage
            diabetes and depression
          </p>
        </div>
      </div>

      {/* Service Card */}
      <div className="row">
      {data.map((data) => (
                <Service_card data={data} key={data.key}></Service_card>
              ))}
      </div>
    </div>
  );
};

export default Services_page_data;
