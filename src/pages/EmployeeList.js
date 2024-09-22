import React, { useState } from 'react';

const EmployeeList = ({ employees, updateEmployee, deleteEmployee }) => {
  const [editEmployee, setEditEmployee] = useState(null);
  const [error, setError] = useState('');

  const handleEditClick = (employee) => {
    setEditEmployee(employee);
    setError(''); 
  };

  const handleSaveClick = () => {
    updateEmployee(editEmployee);
    setEditEmployee(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

   
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setEditEmployee({ ...editEmployee, img: URL.createObjectURL(file) });
      setError(''); 
    } else {
      setError('Only JPEG and PNG files are allowed.');
    }
  };

  return (
    <div className=' text-white flex gap-7 relative '>
      <h3 className='text-2xl font-bold'>Employee List</h3>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {editEmployee?.id === employee.id ? (
              <div className='text-white flex flex-col top-[100px]'>
                <input
                className= "bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[400px] p-[12px] shadow-md shadow-richblack-5"
                  type="text"
                  value={editEmployee.name}
                  onChange={(e) => setEditEmployee({ ...editEmployee, name: e.target.value })}
                />
                <input
                className= "bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[400px] p-[12px] shadow-md shadow-richblack-5"
                  type="email"
                  value={editEmployee.email}
                  onChange={(e) => setEditEmployee({ ...editEmployee, email: e.target.value })}
                />
                <input
                className= "bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[400px] p-[12px] shadow-md shadow-richblack-5"
                  type="text"
                  value={editEmployee.mobileNo}
                  onChange={(e) => setEditEmployee({ ...editEmployee, mobileNo: e.target.value })}
                />
                <input
                className= "bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[400px] p-[12px] shadow-md shadow-richblack-5"
                  type="text"
                  value={editEmployee.designation}
                  onChange={(e) => setEditEmployee({ ...editEmployee, designation: e.target.value })}
                />
                <div className='text-black bg-black'>
                <select
                  className='text-black bg-black'
                  value={editEmployee.gender}
                  onChange={(e) => setEditEmployee({ ...editEmployee, gender: e.target.value })}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                </div>
                

                <input
                  type="text"
                  value={editEmployee.course}
                  onChange={(e) => setEditEmployee({ ...editEmployee, course: e.target.value })}
                />

                
                <div>
                  <label>Upload New Image: </label>
                  <input type="file" accept="image/jpeg, image/png" onChange={handleFileChange} />
                  {editEmployee.img && <img src={editEmployee.img} alt={editEmployee.name} style={{ width: '50px', marginTop: '10px' }} />}
                </div>

                
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <div>
                <p>Name: {employee.name}</p>
                <p>Email: {employee.email}</p>
                <p>Mobile No: {employee.mobileNo}</p>
                <p>Designation: {employee.designation}</p>
                <p>Gender: {employee.gender}</p>
                <p>Course: {employee.course}</p>
                {employee.img && <img src={employee.img} alt={employee.name} style={{ width: '50px' }} />}
                <button onClick={() => handleEditClick(employee)}>Edit</button>
              
                <button onClick={() => deleteEmployee(employee.id)} style={{ marginLeft: '10px', color: 'red' }}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
