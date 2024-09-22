import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import logo from "../assets/Emplo.png";
import { toast } from 'react-hot-toast';




const Navbar = (props) => {
  let isLogedIn =props.isLogedIn;
  let setIsLogedIn=props.setIsLogedIn;

  return (
    <div className='flex justify-between  items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

    <Link to="/">
    <img className='text-white' src={logo}  alt='Logo' height={10} width={200}  loading="lazy"/>
    </Link>

    <nav>
    <ul className='flex gap-x-6 ml-2 text-richblack-100'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">About</Link></li>
    <li><Link to="/">Contact</Link></li>
    </ul>
    </nav>

    <div className='flex items-center gap-x-4 '>
    {!isLogedIn &&
      <Link to="/login">
      <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
        Log in
      </button>
     </Link>
    } 
    {!isLogedIn &&
      <Link to="/signup">
      <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
        Sign Up
      </button>
     </Link>
    } 
    {isLogedIn  &&
      <Link to="/">
      <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=>{
        setIsLogedIn(false);
        toast.success("Logged Out")
      }}>
        Log Out
      </button>
     </Link>
    } 
    {isLogedIn &&
      <Link to="/dashboard">
      <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
        Dashboard
      </button>
     </Link>
    } 
    {isLogedIn &&
      <Link to="/employemanagment">
      <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
          Employee Management
      </button>
     </Link>
    } 

    </div>
    </div>
  )
}

export default (Navbar)