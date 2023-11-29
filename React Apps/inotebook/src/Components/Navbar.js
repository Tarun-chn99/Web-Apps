import React, { useEffect } from 'react';
import {Link , useLocation, useNavigate} from 'react-router-dom';


const Navbar = () => {

  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('session_token');
    navigate("/login");
  }

  return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">iNotebook</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={`nav-link ${location.path === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.path === '/About' ? "active" : ""}`} to="/About">About</Link>
                </li>
            </ul>
            {
              !localStorage.getItem('session_token') ? 
              <form className="d-flex">
              <Link className="btn btn-primary mx-2" to="/Login" role="button">Login</Link>
              <Link className="btn btn-primary mx-2" to="/Signup" role="button">Signup</Link>
              </form> : 
              <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            }
            </div>
        </div>
    </nav>

  ); 
  
}

export default Navbar;