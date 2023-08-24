import React, { useState } from 'react'

const Signup = () => {

  const [credentials, setCredentials] = useState({email : "", password : ""});
  const handleSubmit = async (e) => {
      
      e.preventDefault();
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTU5NTY3MzZiZTljNDEzODYwYTBjMiIsImlhdCI6MTY5Mjc2NzczM30.r7aOOKXHBB9TguPufQ1MGgtJ-fJipB9ROPs1jSXkKog"
          },
          body: JSON.stringify({email: credentials.email, password: credentials.password}) 
          });
        const json =  await response.json(); 
        console.log(json);
  }

  const onChange = (e) => {
      setCredentials({...credentials,[e.target.name] : e.target.value});
  }
  return (
    <div className='my-5'>
        <h2>Signup</h2>
        <form className="my-2" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={onChange} id="email" value={credentials.email} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onChange} id="password" value={credentials.password}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Signup