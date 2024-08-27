import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";
import UserLocation from "./UserLocation";

const Header = () => {

    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store)=>store.cart.cartData.restaurantData.items);

    const login = (e) => {
        if(btnName === "Login")
        setBtnName("LogOut");
        else
        setBtnName("Login")
    }

    return(
        <div title='header' className="flex justify-between items-center shadow-lg ">

            <div className="flex items-center mx-4">
                <div className="w-20">
                    <Link to='/' className="logo-link">
                        <img className='logo' src={LOGO_URL} alt="" width="100%"/>
                    </Link>
                </div>
                <Link to='/'><h3 className="text-xl italic font-bold">InstaFood</h3></Link>
                <UserLocation />
            </div>

            <div className="mx-4">
                <ul className="flex list-none items-center">
                    <li className="flex"><b>Status : </b> {onlineStatus === true ? <span className="inline-block p-[0.75rem] rounded-[2rem] w-[0.25rem] bg-[#52c152] mx-2"></span> : <span className="inline-block p-[0.75rem] rounded-[2rem] w-[0.25rem] bg-red-500 mx-2"></span>}</li>
                    <li className='px-2 py-2 mx-1 cursor-pointer hover:text-orange-500 transition duration-500'><Link to="/">Search</Link></li>
                    <li className='px-2 py-2 mx-1 cursor-pointer hover:text-orange-500 transition duration-500'><Link to="/about">About</Link></li>
                    <li className='px-2 py-2 mx-1 cursor-pointer hover:text-orange-500 transition duration-500'><Link>Help</Link></li>
                    <li className='px-2 py-2 mx-1 cursor-pointer hover:text-orange-500 transition duration-500'><Link>Sign In</Link></li>
                    <li className='px-2 py-2 mx-1 cursor-pointer hover:text-orange-500 transition duration-500'><Link to="/cart"><b>Cart : {cartItems.length}</b></Link></li>
                    <button className="px-6 py-2 mx-4 rounded-lg  outline-none cursor-pointer bg-gray-200 hover:bg-gray-400 font-bold" onClick={login}>{btnName}</button>                  
                </ul>
            </div>
    </div>
    );
}

export default Header;


