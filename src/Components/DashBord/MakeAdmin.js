import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import DashbordHeader from "./DashbordHeder";
import "./DashBord.css";

const MakeAdmin = () => {
  const [email,setEmail]=useState('');
  const EmailRef = useRef();


  const makeAdmin=(e)=>{
    const AdminEmail = EmailRef.current.value;

    const newUser = { AdminEmail };
    console.log(newUser);

    e.preventDefault();
    EmailRef.current.value='';


     // API Load
   fetch("https://still-brushlands-71573.herokuapp.com/admin", {
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

  }
  return (
    <div>
      <DashbordHeader></DashbordHeader>

      <div className="MakeAdmin">
        <div className="row   w-50 m-auto">
          <div className="col">
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput">
                  Are you want to add Another Admin for your website?{" "}
                  <span className="text-danger">(Be careful)</span>
                </label>
                <input
                 ref={EmailRef}
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Email"
                />
                <button onClick={makeAdmin} className="btn btn-primary mt-4">Add Admin</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MakeAdmin;
