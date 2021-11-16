/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hook/useAuth";
import "./Service_card.css";

const Product_card = (props) => {
  const { user } = UseAuth();
  const email = user.email;

  // const user = props.user;
  // const reverse = user.reverse();
  const { name, Desc, image, price } = props.user;
  const DescSlice = Desc.slice(0, 150);

  // Add to my order
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const desceRef = useRef();

  // Load Data from ref
  const loadData = (e) => {
    const nameData = nameRef.current.innerText;
    const imageData = imageRef.current.src;
    const priceData = priceRef.current.innerText;
    const desceData = desceRef.current.innerText;

    console.log(nameData);
    const newUser = { nameData, imageData, priceData, desceData, email };
    console.log(newUser);
    // alert("Data added to your oder page");

    // API Load
    fetch("https://still-brushlands-71573.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          e.target.reset();
        }
      });
  };

  return (
    <div className="col-lg-4">
      <div className="card ">
        <div>
          <img
            ref={imageRef}
            className="card-img-top img-fluid"
            src={image}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <p ref={nameRef} className="card-title text-danger">
            <span className="">{name}</span>
          </p>
          <p ref={priceRef} className="card-title text-light">
            $ {price}
          </p>
          <p ref={desceRef} className="card-text text-light">
            {DescSlice}
          </p>

          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            onClick={loadData}
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCentered"
          >
            Add to Cart!
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal"
            id="exampleModalCentered"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenteredLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenteredLabel">
                    Added to Cart item!
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">Plase See your My Order Page and Purchase Here...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>

          {/* <Link
            onClick={loadData}
            type="button"
            class="btn btn-primary"
            to="/payment"
          >
            Purchase Now
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Product_card;
