import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    mobileNo: '',
    designation: '',
    gender: 'Male',
    course: '',
    img: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(newEmployee);
    setNewEmployee({
      name: '',
      email: '',
      mobileNo: '',
      designation: '',
      gender: 'Male',
      course: '',
      img: ''
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewEmployee({ ...newEmployee, img: URL.createObjectURL(file) });
  };

  return (
    <div className='text-white absolute -right-[20px] top-[220px] w-[300px] '>
      <h3 className='font-bold text-xl'>Add New Employee</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
           className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
            placeholder='Enter Name'
            type="text"
            value={newEmployee.name}
            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
          required
           className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
          placeholder='Enter Email Address'
            type="email"
            value={newEmployee.email}
            onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
          />
        </div>
        <div>
          <label>Mobile No: </label>
          <input
          required
           className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
          placeholder='Enter Mobile Number'
            type="text"
            value={newEmployee.mobileNo}
            onChange={(e) => setNewEmployee({ ...newEmployee, mobileNo: e.target.value })}
          />
        </div>
        <div>
          <label>Designation: </label>
          <input
          required
           className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
          placeholder='Enter Designation'
            type="text"
            value={newEmployee.designation}
            onChange={(e) => setNewEmployee({ ...newEmployee, designation: e.target.value })}
          />
        </div>
        <div>
          <label>Gender: </label>
          <select
            value={newEmployee.gender}
            onChange={(e) => setNewEmployee({ ...newEmployee, gender: e.target.value })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Course: </label>
          <input
            required
             className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
            placeholder='Enter Course'
            type="text"
            value={newEmployee.course}
            onChange={(e) => setNewEmployee({ ...newEmployee, course: e.target.value })}
          />
        </div>
        <div>
          <label>Upload Image: </label>
          <input required type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
