import React,{useState} from 'react';
import ControleOrders from '../ControleOrders/ControleOrders';

const ManageOrder = () => {
    const [orderMan] = useState("AllOrderMan");

    return (
        <div>
             <div className="row d-flex justify-content-center">
            
            <div className="col-md-9 text-center  text-center">
              {orderMan === "AllOrderMan" && <ControleOrders ></ControleOrders>}
            </div>
          </div>
        </div>
    );
}
export default ManageOrder;