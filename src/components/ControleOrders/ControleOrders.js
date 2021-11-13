import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './ControleOrder.css'




const ControleOrders = () => {


    const [orderPerson, setOrderPerson] = useState([]);

    useEffect(()=>{
        fetch("https://guarded-badlands-04784.herokuapp.com/orderDetails")
        .then(res=>res.json())
        .then(data=>setOrderPerson(data))
    },[ ])


    const handleDelete=id=>{

        const url=`https://guarded-badlands-04784.herokuapp.com/orderDetails/${id}`
    
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.deletedCount){
                alert('Are you sure delete you order?')
                const matchingId=orderPerson.filter(orderData=>orderData._id !==id)
            setOrderPerson(matchingId)
             }
            
        })
    }




    return (
        <div>
         <Table className="table table-dark table-hover" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact Num:</th>
            <th>Action</th>
          </tr>
        </thead>
        {orderPerson?.map((orderInfo, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{orderInfo?.name}</td>
              <td>{orderInfo?.email}</td>
              <td>{orderInfo?.address}</td>
              <td>{orderInfo?.number}</td>
              
              <td><button onClick={()=>handleDelete(orderInfo._id)} className="btn button delete-order-btn p-2">Delete Order</button></td>
 
             </tr>
          </tbody>
        ))}
      </Table>
        </div>
    );
};

export default ControleOrders;

