import './App.css';
import Navbar from './components/Navbar'
import {Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import EmployeeManagement from './components/EmployeeManagement';




function App() {

  const [isLogedIn,setIsLogedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex-col overflow-x-hidden">
      <Navbar isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/> 
    
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login setIsLogedIn={setIsLogedIn}/>}/>
    <Route path="/dashboard" element={
      <PrivateRoute isLogedIn={isLogedIn}>
                    <Dashboard/>
      </PrivateRoute>}/>
    <Route path="/signup" element={<Signup setIsLogedIn={setIsLogedIn}/>}/>
    <Route path="/employemanagment" element={<EmployeeManagement/>}/>
    </Routes>


    </div>
  );
}

export default App;
