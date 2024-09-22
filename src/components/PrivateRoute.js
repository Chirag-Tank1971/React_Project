import { Navigate } from 'react-router-dom';
import React from 'react'

const PrivateRoute = ({isLogedIn , children}) => {
  if(isLogedIn){
    return children 
  }
  else{
    return <Navigate to="/login"/>
  }
}

export default PrivateRoute