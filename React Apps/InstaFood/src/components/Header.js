import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import UserLocation from "./UserLocation";
import Login from "./Login";
import { setAuth } from "../AppStore/appSlice";
import generateHeaderItems from "../utils/generateHeaderItems";
import { removeUser } from "../AppStore/userSlice";
import { BACK_ICON } from "../utils/constants";

const Header = () => {

    const auth = useSelector((store)=>store.app.auth);
    const dispatch = useDispatch();
    const [showLoginWindow,setShowLoginWindow] = useState(false);
    const onlineStatus = useOnlineStatus();
    const location = useLocation();
    const cartItems = useSelector((store)=>store.cart.cartData.restaurantData.items);

    const {
        company_name,
        headerLinkClass,
        headerButtonClass,
        buttonLabel,
        status_icon,
        LOGO_URL
    } = generateHeaderItems(auth);

    const handleLogin = () => {
        if(!auth){
            setShowLoginWindow(true);
        }
        else{
            dispatch(setAuth(null));
            dispatch(removeUser());
        }
    }
        
    const handleCloseLoginForm = () =>  setShowLoginWindow(false);

    return(
        <div title='header' className="flex justify-between items-center shadow-lg w-full py-0 px-1 md:px-4 lg:px-8">

            <div className="flex items-center mx-2 md:mx-2 lg:mx-4">
                <div className="w-14">
                    <Link to='/' className="logo-link">
                        {
                            location.pathname === '/' ?
                                <img className='logo' src={LOGO_URL} alt="logo" width="100%"/>
                               :<img className='w-8 p-2 my-2 bg-gray-300 hover:bg-gray-500' src={BACK_ICON} alt='back' width="100%"/>}
                    </Link>
                </div>
                <Link to='/'><h4 className="text-base italic font-bold">{company_name}</h4></Link>
                {location.pathname === '/' && <UserLocation />}
            </div>

            <div className="mx-0 md:mx-2 lg:mx-4">
                <ul className="flex list-none items-center">
                    <li className=" text-sm hidden lg:flex">
                        <b>Status : </b> 
                        {
                            onlineStatus === true 
                            ? <span className={status_icon + " bg-[#52c152]"}></span> 
                            : <span className={status_icon + " bg-red-500"}></span>
                        }
                    </li>
                    <li className={headerLinkClass}><Link to="/search">Search</Link></li>
                    <li className={headerLinkClass}><Link to="/offers">Offers</Link></li>
                    <li className={headerLinkClass}><Link to='/help'>Help</Link></li>
                    <li className={headerLinkClass}><Link to="/cart"><b>Cart : {cartItems.length}</b></Link></li>
                    <button className={headerButtonClass} onClick={handleLogin}>{buttonLabel}</button>                  
                </ul>
            </div>
            {
                showLoginWindow && <Login handleCloseLoginForm={handleCloseLoginForm}/>
            }
    </div>
    );
}

export default Header;


