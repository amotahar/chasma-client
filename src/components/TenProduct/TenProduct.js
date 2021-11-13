import React,{useState,useEffect} from 'react';
import "./TenProduct.css"
import { useHistory } from 'react-router-dom';



const TenProduct = () => {


  const[products,setProducts]=useState([]);
  const history=useHistory();

  const handleOrder=(_id)=>{
      const uri=`/confirmOrder/${_id}`
      history.push(uri)
    }
    
  useEffect(()=>{
      fetch('https://guarded-badlands-04784.herokuapp.com/product')
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[]);

    return (
      <div className="main_div">
        <div className="container mt-5">
          <div className="our-service-img">
            <img
            className="img-fluid"
              src="https://i.ibb.co/qxCCxHb/Our-Products02-Vector.png"
              alt=""
            />
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              products?.slice(0,6).map((product)=>(
                <div className="col ">
    <div className="card rounded main-col">
      <img height="300px" src={product.img} className="card-img-top rounded" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h5 className="card-title">{product.number}</h5>
        <p className="card-text">{product.description}</p>
        <button onClick={()=>{handleOrder(product._id)}} type="button" className="btn btn-outline-success">Order</button>

      </div>
    </div>
  </div>
              ))
            }
          </div>
        </div>
      </div>
    );
};

export default TenProduct;