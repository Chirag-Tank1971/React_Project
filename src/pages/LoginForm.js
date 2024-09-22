import { computeHeadingLevel, configure } from '@testing-library/react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai"; 
import { AiOutlineEyeInvisible  } from "react-icons/ai";   
import { Link, useNavigate } from 'react-router-dom';
import { collapseToast } from 'react-toastify';

const LoginForm = ({setIsLogedIn}) => {
    const navigate = useNavigate();
    
    const[formData , setFormData]=useState(
        {email:"" , password:""});

    const[showPassword , setShowPassword]=useState(false);

    function chageHandler(event){
        setFormData((prev)=>({
            ...prev , 
            [event.target.name]:event.target.value
        })
    )};
    function submitHandler(event){
        event.preventDefault();
        setIsLogedIn(true);
        toast.success("Logged In");
        const accountData ={
            ...formData
        }
     console.log(accountData)
        navigate("/dashboard");  
    }
  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6">
    <label>
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.376rem]">Email Address <sup className="text-pink-200">*</sup></p>
        <input
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
            required
            type='email'
            value={formData.email}
            name='email'
            placeholder="Enter Your Email Address"
            onChange={chageHandler}
        />
    </label>


    <label className="relative" >
        <p className=" relative text-[0.875rem] text-richblack-5 mb-1 leading-[1.376rem] ">Password<sup className="text-pink-200">*</sup></p>
        <input
        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
            required
            type={showPassword ?("text"):("password")}
            value={formData.password}
            name='password'
            placeholder="Enter Your Password"
            onChange={chageHandler}
        />

        <span className="absolute right-3 top-[38px] cursor-pointer " onClick={()=> setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEye fontSize={23} fill='#AFB2BF'/>):
            (<AiOutlineEyeInvisible fontSize={23} fill='#AFB2BF'/>)}
        </span>

        <Link to="#">
                <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto"> Forget Password</p> 
        </Link>
    </label>

    <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7" >
        Sign In
    </button>
   
    </form>
  )
}
export default LoginForm;

