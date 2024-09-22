import React from 'react'
import Template from './Template';



const Login = ({setIsLogedIn}) => {
  
  return (
    <Template
    title="Welcome Employee"
    formType="login"
    setIsLogedIn={setIsLogedIn}
    />
  )
}


export default Login;
