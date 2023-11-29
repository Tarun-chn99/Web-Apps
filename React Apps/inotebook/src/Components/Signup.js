import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const [credentials, setCredentials] = useState({name: "",email : "", password : "", cpassword: ""});
  let navigate = useNavigate();

  useEffect(() => {
    props.showAlert("Signup Section!");
  }, []);

  const handleSubmit = async (e) => {

      console.log(credentials);
      e.preventDefault();
      const {name,email,password} = credentials;
      const response = await fetch(`http://localhost:5000/api/auth`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name:name,email:email,password:password}) 
          });
      const json =  await response.json(); 
      console.log(json);

      localStorage.setItem('session_token',json.authToken);
      props.showAlert("Account created successfully !");
      navigate("/login");


  }

  const onChange = (e) => {
      setCredentials({...credentials,[e.target.name] : e.target.value});
  }
  return (
    <div className='my-5'>
        <h2>Signup</h2>
        <form className="my-2" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={onChange} id="name" name="name" aria-describedby="emailHelp"  required/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" value={credentials.email} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onChange} id="password" name="password" minLength={5} value={credentials.password} required/>
            </div>            
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" onChange={onChange} id="cpassword" name="cpassword" minLength={5} value={credentials.cpassword} required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Signup