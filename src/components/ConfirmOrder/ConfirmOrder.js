import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import OrderDetails from '../OrderDetails/OrderDetails';
import Header from './../Header/Header/Header';

const ConfirmOrder = () => {

    const {id}=useParams();

    const [details,setDetails]=useState([ ])
    const[productDetails,setProductDetails]=useState({});

   useEffect(()=>{
       fetch('https://guarded-badlands-04784.herokuapp.com/product')
       .then(res=>res.json())
       .then(data=>setDetails(data))
       .catch((error)=>{

       })
   },[]);

useEffect(()=>{
    if(details.length>0){
        const combineOrderId=details.find(detail=>(detail._id===id))
        setProductDetails(combineOrderId)
    }
},[details,id]);











    return (
        <div>
            <Header></Header>
          <div className="container mt-5 ">
              
             <div className="row">
             
             
                 <div className="col-sm-12 col-md-4 col-lg-4 mt-5">
                     <div className="card m-auto" style={{width: "18rem"}}>
                <img src={productDetails.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> {productDetails.name}</h5>
                  <h5 className="card-title"> {productDetails.number}</h5>
      
                </div>
               </div></div>
               <div className="col-sm-12 col-md-8 col-lg-8">
               <div>   <OrderDetails key={productDetails._id}></OrderDetails></div>
                </div>
             </div>
            </div> 
        </div>
    );
};

export default ConfirmOrder;