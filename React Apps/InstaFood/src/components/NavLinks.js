import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavLinks = ({ headerLinkClass,headerButtonClass,handleLogin,buttonLabel,status_icon,onlineStatus}) => {

    const cartItems = useSelector((store)=>store.cart.cartData.restaurantData.items);

    return (
        <div className='mx-4'>

        <ul className="flex list-none items-center">
                    <li className="flex">
                        <b>Status : </b> 
                        {
                            onlineStatus === true 
                            ? <span className={status_icon + "bg-[#52c152]"}></span> 
                            : <span className={status_icon+"bg-red-500"}></span>
                        }
                    </li>
                    <li className={headerLinkClass}><Link to="/">Search</Link></li>
                    <li className={headerLinkClass}><Link to="/about">About</Link></li>
                    <li className={headerLinkClass}><Link>Help</Link></li>
                    <li className={headerLinkClass}><Link>Sign In</Link></li>
                    <li className={headerLinkClass}><Link to="/cart"><b>Cart : {cartItems.length}</b></Link></li>
                    <button className={headerButtonClass} onClick={handleLogin}>{buttonLabel}</button> 
        </ul>
        </div>
  )
}

export default NavLinks
