import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {

  const naviate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    naviate('/login');
  }

  return (

    <nav className={`flex space-between top-${props.side==="left" ? "left" : "right"}-corner`} >
          


      {props.side==="left" ? 
              <>
                <div>
                  <i className="profile-icon fa-solid fa-user txt-white"></i>        
                  <span className="txt-white" id="user"><b>{props.userName}</b></span>
                </div>
                <div>
                    <button className='logout txt-white margin-rit-half' onClick={handleLogout} >Logout</button>
                    <button className="ellipsis margin-rit-half grow1"><i className="fa-solid fa-plus txt-white"></i></button>
                    <button className="ellipsis"><i className="fa-solid fa-ellipsis-vertical txt-white"></i></button>
                </div> 
              </>
                 :
              <>
                <div>
                  <i className="profile-icon fa-solid fa-user txt-white"></i>        
                  <span className="txt-white" id="user"><b>{props.userName}</b></span>
                </div>
                <div>
                  <button className="ellipsis"><i className="fa-solid fa-phone txt-white"></i></button>
                  <button className="ellipsis"><i className="fa-solid fa-video txt-white"></i></button>
                  <button className="ellipsis"><i className="fa-solid fa-ellipsis-vertical txt-white"></i></button>
                </div>
              </>
          }
      
    </nav>
  )
}

export default Navbar;