import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import Footer from "../Footer/Footer";
import DashbordHeader from "./DashbordHeder";
import ManageAllOrderCard from "./ManageAllOrderCard";

const Manane_All_Order = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://still-brushlands-71573.herokuapp.com/purchase")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // Delete function
  const deletDatas = (id) => {
    fetch(`https://still-brushlands-71573.herokuapp.com/purchase/${id}`, {
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

  return (
    <div>
      <DashbordHeader></DashbordHeader>

      <div className="Manane_All_Order">
        <div className="container ">
          <div className="row">
            {service.map((user) => (
              <div className="col-lg-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Name: {user.name}</h4>

                    <p class="card-text text-light">{user.email}</p>
                    <p class="card-text text-light">{user.address}</p>
                    <p class="card-text text-light">{user.phone}</p>

                    <Link className="btn btn-primary disabled">Deliver</Link>
                    <button
                      onClick={() => deletDatas(user._id)}
                      className="btn btn-primary ml-3"
                    >
                      Cencel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Manane_All_Order;
