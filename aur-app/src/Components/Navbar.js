import React from 'react'

const Navbar = () => {
  return (

    <nav className="flex space-between" >
        
    <div>
    <i class="user fa-solid fa-user"></i>        
    <span id="user">User</span>
    </div>

    <div>
    <button className="ellipsis"><i class="fa-solid fa-phone txt-black"></i></button>
    <button className="ellipsis"><i class="fa-solid fa-video txt-black"></i></button>
    <button className="ellipsis"><i class="fa-solid fa-ellipsis-vertical txt-black"></i></button>
    </div>
    
  </nav>
  )
}

export default Navbar;