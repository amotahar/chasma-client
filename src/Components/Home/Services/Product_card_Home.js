/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Service_card.css";

const Product_card_Home = (props) => {
  const user = props.user;
  // const reverse = user.reverse();
  const { name, Desc, image, price } = user;
  const sliceDesc = Desc.slice(0,150)

  // Add to my order
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const desceRef = useRef();

  return (
    <div className="col-lg-4">
       <div className="card">
        <div>
          <img
            ref={imageRef}
            className="card-img-top img-fluid"
            src={image}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h6 ref={nameRef} className="card-title ">
            <span className="text-danger">{name}</span>
          </h6>
          <p ref={priceRef} className="card-title text-light">
            Price : ${price}
          </p>
          <p ref={desceRef} className="card-text text-light">
            {sliceDesc}
          </p>
          <Link type="button" class="btn btn-primary" to="/all_products">
            More Items
          </Link>
        </div>
      </div> 
    </div>
  );
};

export default Product_card_Home;
