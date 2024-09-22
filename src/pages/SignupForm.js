import React, { useState } from 'react'
import { CheckmarkIcon } from 'react-hot-toast'
import { AiOutlineEye} from "react-icons/ai"; 
import { AiOutlineEyeInvisible } from "react-icons/ai"; 
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLogedIn}) => {
    const navigate = useNavigate();
    const[formData , setFormData]=useState({
        firstName:"" , lastName:"" , email:"" , password:"", confirmPassword:""
    });

    function changeHandler(event){
        setFormData((prev)=>({
            ...prev , 
            [event.target.name]:event.target.value
        })
    )};
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("Password Not Matched")
            return;
        }
        else{
        setIsLogedIn(true);
        toast.success("Account Created");
        const accountData ={
            ...formData
        }
        const finalData={
            ...accountData , 
            
        }

        console.log(finalData)
        navigate("/dashboard");  
        }
        
    }
    const[showPassword , setShowPassword]=useState(false);
    const[showConfirmPassword , setShowConfirmPassword]=useState(false);

  return (
    <div>
    <form onSubmit={submitHandler}>
    <div className="flex justify-between  w-full mt-[12px]">
            <label >
                <p className=" relative text-[0.875rem] text-richblack-5 mb-1 leading-[1.376rem] ">First Name<sup className="text-pink-200">*</sup></p>
                <input
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
                required
                type='text'
                name='firstName'
                onChange={changeHandler}
                value={formData.firstName}
                placeholder='Enter First Name'
                />
            </label>

            <label>
                <p className=" relative text-[0.875rem] text-richblack-5 mb-1 leading-[1.376rem] ">Last Name<sup className="text-pink-200">*</sup></p>
                <input
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
                required
                type='text'
                name='lastName'
                onChange={changeHandler}
                value={formData.lastName}
                placeholder='Enter Last Name'
                />
            
            
            </label>
    </div>
                
            <div className="w-full mt-[18px]">
            <label >
                <p className=" relative text-[0.875rem] text-richblack-5 mb-1 leading-[1.376rem] ">Email Address<sup className="text-pink-200">*</sup></p>
                <input
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
                required
                type='email'
                name='email'
                onChange={changeHandler}
                value={formData.email}
                placeholder='Enter Email Address'
                />
            </label>
            </div>    
            

            <div className="flex justify-between w-full mt-[18px]">
            <label className="relative " >
                 <p className=" relative text-[0.875rem] text-richblack-5 mb-1 leading-[1.376rem] ">
                 Create Password<sup className="text-pink-200">*</sup></p>
                <input
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
                required
                type={showPassword ?("text"):("password")}
                name='password'
                onChange={changeHandler}
                value={formData.password}
                placeholder='Enter Password'
                />
                <span className="absolute right-3 top-[38px] cursor-pointer " onClick={()=> setShowPassword((prev)=>!prev)}>
                    {showPassword ? (<AiOutlineEye fontSize={23} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={23} fill='#AFB2BF'/>)}
                </span>
            </label>

            <label className="relative ">
                <p className=" relative text-[0.875rem] text-richblack-5 mb-1 leading-[1.376rem] ">
                Confirm Password<sup className="text-pink-200">*</sup></p>
                <input
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
                required
                type={showConfirmPassword ?("text"):("password")}
                name='confirmPassword'
                onChange={changeHandler}
                value={formData.confirmPassword}
                placeholder='Enter Email Address'
                />
                <span className="absolute right-3 top-[38px] cursor-pointer " onClick={()=> setShowConfirmPassword((prev)=>!prev)}>
            {showConfirmPassword ? (<AiOutlineEye fontSize={23} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={23} fill='#AFB2BF'/>)}
                </span>
            </label>
            </div>


            <button  className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7" >
                Create Account
            </button>

    </form>



    </div>
  )
}


export default SignupForm;