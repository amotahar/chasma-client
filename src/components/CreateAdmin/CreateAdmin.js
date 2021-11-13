import React,{useState} from 'react';
import { Button, Alert,AlertTitle } from '@mui/material';
import useAuth from './../../hooks/useAuth';

const CreateAdmin = () => {
    const[email,setEmail]=useState('');
    // sucess message
    const [sucess,setSucess]=useState(false)
    // token with verify user
    const {token}=useAuth()

    const handleOnBlur = e => {
        setEmail(e.target.value);
        e.preventDefault()
    }


    const handleAdminSubmit=e=>{
        const user={email};
        // handle admin 
        fetch('https://guarded-badlands-04784.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
       if(data.modifiedCount){
           setSucess(true)
           e.target.reset()
       }
        })
      

        e.preventDefault()
    }
    return (
        <div>
            
            <form  onSubmit={handleAdminSubmit}>
                <strong>Email Only</strong> <br />
                <input onBlur={handleOnBlur} type="email" name="" id="" /> <br />
                <Button variant="contained" type="submit">Create Admin</Button>
            </form>
            {
            sucess && <Alert severity="success">
            <AlertTitle>Admin Creation Successfully</AlertTitle>
          </Alert> 
          }
         
        </div>
    );
};

export default CreateAdmin;