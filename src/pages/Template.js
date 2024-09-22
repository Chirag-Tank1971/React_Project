import React from 'react'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from "react-icons/fc";

const Template = ({title , image , formType , setIsLogedIn }) => {
  return (
    <div className="flex justify-center w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
        <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] mb-9">{title}</h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
        
        </p>
        {formType==="signup" ? 
        (<SignupForm setIsLogedIn={setIsLogedIn}/>):
        (<LoginForm setIsLogedIn={setIsLogedIn}/>)} 
        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className= ' w-full h-[1px] bg-richblack-700 '></div>
          <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p> 
          <div  className= ' w-full h-[1px] bg-richblack-700 '></div>
        </div>
        
        <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">
        <FcGoogle /> 
        <p>Sign Up With Google</p>
        </button>
        </div>
    





    </div>
  )
}

export default Template;