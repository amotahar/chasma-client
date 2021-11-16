import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import DashbordHeader from "../DashBord/DashbordHeder";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ManageService.css";

const ManageService = (props) => {
  // control user
  const [service, setService] = useState([]);
  const serviceReverse = service.reverse();
  useEffect(() => {
    fetch("https://still-brushlands-71573.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // Delete data

  const deletData = (id) => {
    fetch(`https://still-brushlands-71573.herokuapp.com/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const reminingData = service.filter((service) => service._id !== id);
          setService(reminingData);
        }
      });
  };

  // Data Slice

  return (
    <div>
      <DashbordHeader></DashbordHeader>

      <div className="userMainData w-75 m-auto">
        <h2 className="mb-5">Total service are Available : {service.length}</h2>
        <div className="container">
          <div className="row">
            {serviceReverse.map((service) => (
              <div className="col-lg-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={service.image}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-title text-danger">{service.name}</p>
                    <p class="card-title text-light">$ {service.price}</p>
                    <p class="card-text text-light">
                    {service.Desc}
                    </p>



                    <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCentered"
                  >
                    Cancel Service!
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
                            onClick={() => deletData(service._id)}
                          >
                            Cencel Order!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* {serviceReverse.map((user) => (
          <div className="row mb-4 ">
            <div className="col d-flex">
              <img
                class="card-img-top img-fluid"
                src={user.image}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title text-danger font-weight-bold">
                  Service Name : {user.name}
                </h4>
                <p class="card-title text-muted">Total Price: ${user.price}</p>
                <p class="card-title text-muted"> {user.Desc}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => deletData(user._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))} */}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ManageService;
