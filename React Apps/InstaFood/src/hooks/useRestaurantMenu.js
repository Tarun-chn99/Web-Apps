import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const useRestaurantMenu = (id) => {

    const [menu,setMenu] = useState(null);
    const location = useSelector((store) => store.app.location);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        try{

            const cachedData = sessionStorage.getItem("resMenu"+id);
            if(cachedData){
                setMenu(JSON.parse(cachedData));
            }
            else{
                const response = await fetch(RESTAURANT_MENU_URL +`lat=${location.lat}&lng=${location.lng}`+ '&restaurantId=' + id);
                const data = await response.json();
                sessionStorage.setItem("resMenu"+id,JSON.stringify(data));
                setMenu(data);
            }``

        }catch(err){
            console.log(err);
        }
    }
    return menu;
}

export default useRestaurantMenu;