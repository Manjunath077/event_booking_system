import React, { useState, useEffect } from 'react'
import "/src/css/Login.css"
import { getData } from '../../utilities/dataStorage';


function Login() {
  let [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  let handleFormSubmit = (e) => {
    e.preventDefault()
    const { email, password } = loginFormData;
    if (email && password) {
      let storedUsers = getData();
      let userExists = storedUsers.some((user) => user.email === email && user.password === password);

      if (userExists) {
        alert("Credential match")
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email); 
        setLoginFormData({
          email: "",
          password: "",
        })
        // navigate('/movies')
      } else {
        alert("Bad credentials")
        setLoginFormData({
          email: "",
          password: "",
        })
      }
    } else {
      alert("Enter Both fields !")
    }
  }


  return (
    <>
      <section className='loginform'>
        <h1 className="mb-5">Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" minLength={8} maxLength={25} className="form-control" id="exampleFormControlInput1" name='email' placeholder="name@example.com" onChange={handleInputChange} value={loginFormData.email} />
          </div>
          <div className="mb-5">
            <label htmlFor="exampleFormControlInput2" className="form-label">Password </label>
            <input type='password' minLength={8} maxLength={20} className="form-control" id="exampleFormControlInput2" name='password' onChange={handleInputChange} value={loginFormData.password} />
          </div>
          <div className='mb-3'>
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login