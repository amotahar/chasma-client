import React, { useRef } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AddNewService.css";
import DashbordHeader from "../DashBord/DashbordHeder";

const AddNewService = () => {
  const nameRef = useRef();
  const DescrRef = useRef();
  const ImageRef = useRef();
  const priceRef = useRef();

  const onHendel = (e) => {
    const name = nameRef.current.value;
    const SliceDesc = DescrRef.current.value;
    const Desc = SliceDesc.slice(0,150);
    const image = ImageRef.current.value;
    const price = priceRef.current.value;

    const newUser = { name, Desc,image,price };

    // API Load
    fetch("https://still-brushlands-71573.herokuapp.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("user added succesful");
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <DashbordHeader></DashbordHeader>
      
      <div>
        <form onSubmit={onHendel} className="w-50 m-auto manage-order">
          <div class="form-group">
            <label for="formGroupExampleInput">Image Url <span className='text-danger'>(Use Only Image URL)</span></label>
            <input
              ref={ImageRef}
              type="text"
              class="form-control"
              id="formGroupExampleInput"
            />
            <label for="formGroupExampleInput">Name Of Service</label>
            <input
              ref={nameRef}
              type="text"
              class="form-control"
              id="formGroupExampleInput"
            />
            <label for="formGroupExampleInput">Price</label>
            <input
              ref={priceRef}
              type="text"
              class="form-control"
              id="formGroupExampleInput"
            />
            <label for="formGroupExampleInput2">Description Data <span className='text-danger'>(Max 150 Word!)</span></label>
            <textarea ref={DescrRef}
              type="text"
              class="form-control"
              id="formGroupExampleInput2">
            
            </textarea>
            <button className='btn btn-primary mt-4' type="submit">Submit</button>
             
            
          </div>
          <div class="form-group"></div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AddNewService;
