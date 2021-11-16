import React, { useRef, useState } from "react";
import UseAuth from "../../Hook/useAuth";
import Footer from "../Footer/Footer";
import DashbordHeader from "./DashbordHeder";

const PaymentDetiels = () => {
  const [data, setData] = useState("");
  const [success, setSuccess] = useState("");
  const addressRef = useRef();
  const phoneRef = useRef();

  const paymentAdd = (e) => {
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const name = user.displayName;
    const email = user.email;
   

    const newReview = { name, email, address, phone };
    console.log(newReview);
    e.preventDefault();
    phoneRef.current.value = "";
    addressRef.current.value = "";

    // API Load
    fetch("https://still-brushlands-71573.herokuapp.com/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
        }
      })
      .catch(error=>{
        setSuccess("Your Order Submit Successful!")
      });
  };
  const { user } = UseAuth();

  return (
    <div className="">
      <DashbordHeader></DashbordHeader>
      <div className="container PaymentDetiels">
        <div className="row">
          <div className="col-lg-6">
            <h2> Cart Summary</h2>
            <p>Sub Total</p>
          </div>
          <div className="col-lg-6">
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput">Your Name :</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  id="formGroupExampleInput"
                  placeholder="Name"
                  value={user.displayName}
                  disabled
                />
                <label for="formGroupExampleInput">Email Address :</label>
                <input
                  type="email"
                  class="form-control mb-3"
                  id="formGroupExampleInput"
                  placeholder="Email"
                  value={user.email}
                  disabled
                />
                <label for="formGroupExampleInput">Your Address :</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  id="formGroupExampleInput"
                  placeholder="Write your Address"
                  ref={addressRef}
                  required
                />
                <label for="formGroupExampleInput">Phone Number :</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  id="formGroupExampleInput"
                  placeholder="Phone Number"
                  ref={phoneRef}
                  required
                />

                <button onClick={paymentAdd} className="btn btn-primary">
                  Submit
                </button>
                <p className='text-success focus mt-4'>{success}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PaymentDetiels;
