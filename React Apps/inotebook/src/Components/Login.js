import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    
    const [credentials, setCredentials] = useState({email : "", password : ""});
    let navigate = useNavigate();

    useEffect(() => {
      props.showAlert("Login Section!");
    }, []);


    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // "auth-token":session_token
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}) 
            });
          const json =  await response.json(); 
          console.log(json);
          if(json.success){
            localStorage.setItem('session_token',json.authToken);
            props.showAlert("Logged in successfully");
            navigate("/");
          }
          else{
            props.showAlert("Invalid credentials!")
          }
    }

    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name] : e.target.value});
    }

    return (
    <div className='my-5'>
        <h3>Login</h3>
        <form className="my-4" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={onChange} name="email" id="email" value={credentials.email} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onChange} name="password" id="password" value={credentials.password}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login