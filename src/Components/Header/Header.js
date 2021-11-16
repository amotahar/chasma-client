import React from "react";
import "./Header.css";
import logo from "../../img/2.webp";
import useFireBase from "../../Hook/FireBase/FireBase";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
const Header = () => {
  const { user, logOut } = useAuth();

  // Realod function

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-light  nav-text">
        <div className="container">
          <Link class="nav-link" to="/home">
            {" "}
            <img src={logo} alt="" />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/home">
                  Home
                </Link>
              </li>
              
              
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
             
              <li class="nav-item">
              {user.email ? (
                    <Link to="/dashbord" className=" nav-link ">
                      DashBord
                    </Link>
                  ) : (
                    <Link to="/dashbord" className=" nav-link ">
                      {" "}
                      
                    </Link>
                  )}
              </li>
            </ul>

            {user.email ? (
              <div>
                <button className="btn btn-primary mr-2" onClick={logOut}>Log Out</button>
                <span className="text-danger">{user.displayName}</span>
              </div>
            ) : (
              <Link className="btn btn-primary" to="/Register">
                Register
              </Link>
            )}
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
