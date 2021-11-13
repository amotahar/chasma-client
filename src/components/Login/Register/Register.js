import  React,{useState} from 'react';
import {Container,Button, CircularProgress,Box, Alert, AlertTitle} from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Register = () => {

    const[registationInfo,setRegistationInfo]=useState({})


    const{user,registerUser,loding,error}=useAuth()



    // onblur change
    const handleOnBlur=data=>{
        const field=data.target.name;
        const value=data.target.value;
        const newLoginData={...registationInfo};
        newLoginData[field]=value;
        setRegistationInfo(newLoginData)
    }

    // Submit form
    const handleLogSubmite=data=>{
        if(registationInfo.password !==registationInfo.password2){
             alert('incorrect password');
             return
        }
        registerUser(registationInfo.email,registationInfo.password)
        data.preventDefault()
    }




    return (
      <Container>
        <h1 className="text-center">Registration Form</h1>
        <div className="main-form ">
         {!loding && <form onSubmit={handleLogSubmite}>


            <span className="email">Email</span> <br />
            <input required onBlur={handleOnBlur} type="email" name="email" id="" /> <br />
            <span className="password">Password</span> <br />
            <input placeholder="Password" required onBlur={handleOnBlur} type="password" name="password" id="" /> <br />
            <span className="password2">Re-Password</span> <br />
            <input placeholder="Password" required onBlur={handleOnBlur} type="password" name="password2" id="" /> <br />
            <Button type="submit">Register</Button> <br />
            <NavLink to="/login" style={{textDecoration:'none',cursor:"pointer"}} ><Button>Already Registered </Button></NavLink>
          </form>}
         <div className="App">
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
         </div>
        </div>
      </Container>
    );
};

export default Register;