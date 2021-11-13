import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../hooks/useAuth';
import "./OrderDetails.css"



const OrderDetails = () => {

    const{register,handleSubmit}=useForm();

  const {user}=useAuth()
  
const onSubmit=(e)=>{
    fetch('https://guarded-badlands-04784.herokuapp.com/orderDetails',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(e)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
          alert('Thanks for order')
       
        }
    })
    
}



    return (
        <div>
          <div>Name : {user.displayName} </div>
          <div>Email : {user.email} </div>
          
             <div>
<form className="form" onSubmit={handleSubmit(onSubmit)}> <br />
<h2 className="text-center order_NOW">Confirm Your Order</h2>

<input
  {...register("name", { required: true })}
  placeholder="Your Name"
  className="p-2 m-2"
  defaultValue={user.displayName}
/>
<br />
<input
  {...register("email", { required: true })}
  placeholder="Email"
  className="p-2 m-2"
  defaultValue={user.email}
/>
<br />
<input
  {...register("number", { required: true })}
  placeholder="Contact Number"
  className="p-2 m-2"
/>

<br />
<input
  {...register("address", { required: true })}
  placeholder="Your Address"
  className="p-2 m-2"
/>
<br />

<input type="submit" value="Order Now" />     
</form>
        </div>
        </div>
    );
};

export default OrderDetails;