import React from 'react'

const Navbar = (props) => {
  return (

    <nav className={`flex space-between top-${props.side==="left" ? "left" : "right"}-corner`} >
          


      {props.side==="left" ? 
              <>
                <div>
                  <i className="profile-icon fa-solid fa-user txt-white"></i>        
                  <span className="txt-white" id="user"><b>{props.userName}</b></span>
                </div>
                <div>
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