/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MyOrderData.css";

const MyOrderData = (props) => {
  const { user } = UseAuth();
  const [service, setService] = useState([]);
  console.log(service);

  useEffect(() => {
    fetch(`https://still-brushlands-71573.herokuapp.com/order?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const deletDatas = (id) => {
    fetch(`https://still-brushlands-71573.herokuapp.com/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const reminingData = service.filter((service) => service._id !== id);
          setService(reminingData);
        }
      });
    // alert('Are you cencel order!')
  };

  return (
    <div>
      <div className="container MyOrderData">
        <h2 className="text-center mt-4 d-inline-block">
          Total Order's Item: {service.length}
        </h2>
        <Link className="btn btn-primary ml-3" to="/payment">
          {" "}
          Purchase Now
        </Link>
        <div className="row">
          {service.map((users) => (
           
            <div className=" mt-5 col-lg-4 MyOrderDataWidth m-auto">
              <div class="card">
                <div class="card-body MyOrderDataWidth">
                  <img
                    class="card-img-top img-fluid"
                    src={users.imageData}
                    alt="Card image cap"
                  />
                  <p class="card-title mt-3 text-danger"> {users.nameData}</p>
                  <p class="card-title text-light">{users.priceData}</p>
                  <p class="card-text text-light">{users.desceData}</p>

                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCentered"
                  >
                    Cancel Order!
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
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5
                            class="modal-title"
                            id="exampleModalCenteredLabel"
                          >
                            
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
                        <div class="modal-body">
                          Are You Want to Cencel This Order?
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            data-dismiss="modal"
                            className="btn btn-primary"
                            onClick={() => deletDatas(users._id)}
                          >
                            Cencel Order!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---------------- */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrderData;
