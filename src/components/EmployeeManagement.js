import React, { useState } from 'react';
import EmployeeList from '../pages/EmployeeList';
import EmployeeForm from '../pages/EmployeeForm';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      mobileNo: '1234567890', 
      designation: 'Developer', 
      gender: 'Male', 
      course: 'MCA', 
      img:'' 
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState(null);

  // Function to add new employee
  const addEmployee = (newEmployee) => {
    const emailExists = employees.some(emp => emp.email === newEmployee.email);
    if (emailExists) {
      alert('Email already exists!');
      return; // Prevent adding the employee
    }
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
  };

  // Function to update an existing employee
  const updateEmployee = (updatedEmployee) => {
    const emailExists = employees.some(emp => emp.email === updatedEmployee.email && emp.id !== updatedEmployee.id);
    if (emailExists) {
      alert('Email already exists!');
      return; // Prevent updating the employee
    }
    setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
  };

  // Function to delete an employee
  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  // Sorting the employees by the selected field (name, email, or id)
  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortField) {
      if (sortField === 'name' || sortField === 'email') {
        return a[sortField].localeCompare(b[sortField]);
      } else if (sortField === 'id') {
        return a.id - b.id;
      }
    }
    return 0;
  });

  // Filtering employees based on search term
  const filteredEmployees = sortedEmployees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.id.toString().includes(searchTerm)
  );

  return (
    <div className='text-white mx-auto w-full justify-center relative flex gap-[100px] '>
    <div>
    <h2 className=' mt-[50px] mb-5 text-2xl font-extrabold'>Employee Management</h2>
      
      <input 
        className= "bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] shadow-md shadow-richblack-5"
        type="text" 
        placeholder="Search Employee" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        style={{ marginBottom: '10px', padding: '5px' }}
      />
    </div>

    <div className='mt-[60px] relative left-[200px]'>
    <EmployeeList employees={filteredEmployees} updateEmployee={updateEmployee} deleteEmployee={deleteEmployee} />

    </div>
    <div className='absolute'>
    <EmployeeForm addEmployee={addEmployee} />
    </div>
    
      

    

      
    </div>
  );
};

export default EmployeeManagement;
