import React from "react";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useFireBase from "../../Hook/FireBase/FireBase";
import useAuth from "../../Hook/useAuth";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const LongInFrom = () => {
  const location = useLocation();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const redrict_url = location.state?.from || "/home";
  const auth = getAuth();

  const { user, singInGoogle } = useAuth();
  const hendelGoogleLog = () => {
    singInGoogle().then((result) => {
      history.push(redrict_url);
    });
  };


   // User Profile

   const userProfile = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  // Email Reg
  const hendelReg = (e) => {
    e.preventDefault();
    console.log("Hello");
    if(password.length<6){
      setError('Password must be at latest 6 character long')
      return;
    }
    createUserWithEmailAndPassword(auth, email, password, name)
    .then(result=>{
      const user= result.user;
      history.push(redrict_url);
      userProfile();
      setError('')
    })
    .catch(error=>{
      setError("This Email already Register!")
    })


  };


  // Email Hendel

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };
  const handelName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="container w-50 m-auto mt-5 pt-5 login LongInFrom">
      <h2>Register Data</h2>
      <form onSubmit={hendelReg}>
        <div class="form-group">
          <label htmlFor="formGroupExampleInput">Name :</label>
          <input
            onBlur={handelName}
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder=""
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="formGroupExampleInput">Email :</label>
          <input
            onBlur={handelEmail}
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder=""
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Password :</label>
          <input
            onBlur={handelPassword}
            type="password"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder=""
            required
          />
        </div>
        <p className='text-danger'>{error}</p>
        <p>Already Register <Link to='/singIn'>Log In</Link></p>
        <input type="submit" className="btn btn-primary" value="Register" />
        {/* <button className="btn btn-primary">Log IN</button> */}
      </form>
      <div className="mt-5 ">
        <h4>Or use this Method</h4>
        <button onClick={hendelGoogleLog} className="btn btn-primary">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default LongInFrom;
