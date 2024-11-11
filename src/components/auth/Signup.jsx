import React, { useState } from 'react';
import { getData, setData } from '../../utilities/dataStorage';

function Signup() {
  let [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  let handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.fullname && formData.email && formData.password && formData.confirmpassword) {
      let existingData = getData() || [];
      let newId = existingData.length > 0 ? existingData[existingData.length - 1].id + 1 : 1;
      let newUser = {
        id: newId, 
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password
      };

      let updatedData = [...existingData, newUser];

      setData(updatedData);

      alert("Registered successfully!");
      
      // Reset form
      setFormData({
        fullname: "",
        email: "",
        password: "",
        confirmpassword: ""
      });
    } else {
      alert("Fill all the fields!");
    }
  };

  return (
    <>
      <section className='loginform'>
        <h1 className="mb-5">Signup Form</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input 
              name='fullname' 
              type="text" 
              minLength={8} 
              maxLength={25} 
              className="form-control" 
              id="fullname" 
              onChange={handleInputChange} 
              value={formData.fullname}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              name='email' 
              type="email" 
              minLength={8} 
              maxLength={25} 
              className="form-control" 
              id="email" 
              placeholder="name@example.com" 
              onChange={handleInputChange} 
              value={formData.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              name='password' 
              type='password' 
              minLength={8} 
              maxLength={20} 
              className="form-control" 
              id="password" 
              onChange={handleInputChange} 
              value={formData.password}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
            <input 
              name='confirmpassword' 
              type='password' 
              minLength={8} 
              maxLength={20} 
              className="form-control" 
              id="confirmpassword" 
              onChange={handleInputChange} 
              value={formData.confirmpassword}
            />
          </div>
          <div className='mb-3'>
            <button type="submit" className="btn btn-primary">Signup</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Signup;
