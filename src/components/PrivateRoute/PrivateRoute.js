import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import { CircularProgress} from '@mui/material';

const PrivateRoute = ({children,...rest}) => {
    const {user,loding}=useAuth();
    if(loding){return  <CircularProgress />}
    return (
      <Route
      {...rest}
      render={({location})=>
    user.email ? (
        children
    ):(
        <Redirect
        to={{
            pathname:"/login",
            state: {from:location}
        }}
        
        />
    )
    }
      
      ></Route>
    );
};

export default PrivateRoute;