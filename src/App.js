import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Not_fund_page from "./Components/404_Page/404_page";
import About_Main_Page from "./Components/About_Page/About_Main_Page";
import Home from "./Components/Home/Home";

import Login_page from "./Components/Login_Sing/Login_page";
import SingIn_page from "./Components/Login_Sing/SingIn_page";
import Manage_order from "./Components/AddNewService/AddNewService";
import Private_route from "./Components/Private_Route/Private_route";
import Service_Page from "./Components/Service_Page/Service_Main_Page";
import AuthProvider from "./Context/AuthProvider";
import AddNewService from "./Components/AddNewService/AddNewService";
import DeleteOldService from "./Components/ManageService/ManageService";
import ManageService from "./Components/ManageService/ManageService";
import ManageOrder from "./Components/ManageOrder/AllProduct";
import MyOrder from "./Components/MyOrder/MyOrder";
import MyOrderData from "./Components/MyOrder/MyOrderData";
import AllProduct from "./Components/ManageOrder/AllProduct";
import DashBord from "./Components/DashBord/DashBord";
import Payment from "./Components/DashBord/Payment";
import Review from "./Components/DashBord/Review";
import PaymentDetiels from "./Components/DashBord/PaymentDetiels";
import MakeAdmin from "./Components/DashBord/MakeAdmin";
import Manane_All_Order from "./Components/DashBord/Manane_All_Order";

const App = () => {
  return (
    <div className="container-main">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About_Main_Page></About_Main_Page>
            </Route>
            <Private_route exact path="/all_products">
             <AllProduct></AllProduct>
            </Private_route>
            <Private_route exact path="/service">
              <Service_Page></Service_Page>
            </Private_route>
            <Route exact path="/register">
              <Login_page></Login_page>
            </Route>
            <Route exact path="/singIn">
              <SingIn_page></SingIn_page>
            </Route>
            <Private_route exact path="/addnewService">
             <AddNewService></AddNewService>
            </Private_route>
            <Private_route exact path="/myOrder">
             <MyOrder></MyOrder>
            </Private_route>
            <Private_route exact path="/payment">
             <Payment></Payment>
            </Private_route>
            <Private_route exact path="/review">
             <Review></Review>
            </Private_route>
            <Private_route exact path="/dashbord">
             <DashBord></DashBord>
            </Private_route>
            <Private_route exact path="/manageService">
             <ManageService></ManageService>
            </Private_route>
            <Private_route exact path="/order_place">
             <PaymentDetiels></PaymentDetiels>
            </Private_route>
            <Private_route exact path="/make_an_admin">
             <MakeAdmin></MakeAdmin>
            </Private_route>
            <Private_route exact path="/manage_all_order">
             <Manane_All_Order></Manane_All_Order>
            </Private_route>
            
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="*">
              <Not_fund_page></Not_fund_page>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
