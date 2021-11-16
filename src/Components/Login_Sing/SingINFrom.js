import React from "react";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useFireBase from "../../Hook/FireBase/FireBase";
import useAuth from "../../Hook/useAuth";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";

const SingINFrom = () => {
  const location = useLocation();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const redrict_url = location.state?.from || "/home";
  const auth = getAuth();
  const [loading,setLoading]=useState(true);

  const { user, singInGoogle } = useAuth();
  const hendelGoogleLog = () => {
    singInGoogle().then((result) => {
      history.push(redrict_url);
    })
    // .catch(error=>{
    //   console.log(error.message);
    //   setError("Email or Password wrong!")
    // })
  };

  // Email Reg
  const hendelReg = (e) => {
    setLoading(true);
    e.preventDefault();
    if(password.length<6){
      setError('Password must be at latest 6 character long')
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{
      const user= result.user;
      console.log(user);
      setError('Wow GreatYou are now log in');
      history.push(redrict_url);
    })
    .catch(error=>{
      setError("Email or Password wrong!")
    })
    .finally(()=>setLoading(false))


  };


 

  // Email Hendel

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };



  return (
    <div className="container w-50 m-auto mt-5 pt-5 login SingINFrom">
      <h2>Sign In Here</h2>
      <form onSubmit={hendelReg}>
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
        <p>Not Register <Link to='/register'>Register</Link></p>
        <input type="submit" className="btn btn-primary" value="Sign In" />
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

export default SingINFrom;
