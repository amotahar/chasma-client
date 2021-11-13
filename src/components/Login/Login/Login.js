import  React,{useState} from 'react';
import {AlertTitle, Alert,Button, CircularProgress,Box} from '@mui/material';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import useAuth from './../../../hooks/useAuth';

const Login = () => {

    const[loginInfo,setLoginInfo]=useState({})
    const{user,loding,loginUser,error,handleFacebookSignIn}=useAuth();
    // redirect after login
    const location=useLocation();
    const history=useHistory();
    // onblur change
    const handleOnBlur=data=>{
        const field=data.target.name;
        const value=data.target.value;
        const newLoginData={...loginInfo};
        newLoginData[field]=value;
        setLoginInfo(newLoginData)
    }

    // Submit form
    const handleLogSubmite=data=>{
        loginUser(loginInfo.email,loginInfo.password,location,history)
        data.preventDefault()
    }




    return (
      <div>
        <h1 className="text-center">Login</h1>
        <Container className="main-form">
          <form onSubmit={handleLogSubmite}>


            <span className="email">Email</span> <br />
            <input required onBlur={handleOnBlur} type="email" name="email" id="" /> <br />
            <span className="password">Password</span> <br />
            <input required onBlur={handleOnBlur} type="password" name="password" id="" /> <br />
            <Button type="submit">Login</Button> <br />
            <NavLink to="/register" style={{textDecoration:'none',cursor:"pointer"}} >Create New Account!</NavLink>
            {
            loding &&  <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          }
            {
            user?.email && <Alert severity="success">
            <AlertTitle>Registration Success</AlertTitle>
          </Alert>
          }
           {
             error && <Alert severity="error">
            <AlertTitle>{error}</AlertTitle>
          </Alert>
          }
          <Button onClick={handleFacebookSignIn}>Login With Facebook</Button>
          </form>
        </Container>
      </div>
    );
};

export default Login;