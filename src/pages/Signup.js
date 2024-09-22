import React from 'react';
import Template from './Template';


const Signup = ({setIsLogedIn}) => {
  return (
    <Template
    title="Create Employee Account"
    formType="signup"
    setIsLogedIn={setIsLogedIn}
    />
  )
}

export default (Signup)