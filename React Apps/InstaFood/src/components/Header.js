import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import UserLocation from "./UserLocation";
import Login from "./Login";
import { setAuth } from "../AppStore/appSlice";
import generateHeaderItems from "../utils/generateHeaderItems";
import { removeUser } from "../AppStore/userSlice";

const Header = () => {

    const auth = useSelector((store)=>store.app.auth);
    const dispatch = useDispatch();
    const [showLoginWindow,setShowLoginWindow] = useState(false);
    const onlineStatus = useOnlineStatus();
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
        <div title='header' className="flex justify-between items-center shadow-lg w-full overflow-hidden px-8">

            <div className="flex items-center mx-4">
                <div className="w-16">
                    <Link to='/' className="logo-link">
                        <img className='logo' src={LOGO_URL} alt="logo" width="100%"/>
                    </Link>
                </div>
                <Link to='/'><h4 className="text-base italic font-bold">{company_name}</h4></Link>
                <UserLocation />
            </div>

            <div className="mx-4">
                <ul className="flex list-none items-center">
                    <li className="flex text-sm">
                        <b>Status : </b> 
                        {
                            onlineStatus === true 
                            ? <span className={status_icon + " bg-[#52c152]"}></span> 
                            : <span className={status_icon + " bg-red-500"}></span>
                        }
                    </li>
                    <li className={headerLinkClass}><Link to="/">Search</Link></li>
                    <li className={headerLinkClass}><Link to="/about">Offers</Link></li>
                    <li className={headerLinkClass}><Link>Help</Link></li>
                    <li className={headerLinkClass}><Link>Sign In</Link></li>
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


