import { useEffect,useState } from "react";
import { RES_LIST_URL } from "../utils/constants";
import { useSelector } from "react-redux";


const useRestaurantList = (setList) => {

    const [resList, setResList] = useState([]);
    const location = useSelector((store) => store.app.location);

    const fetchList = async () => {

        try{
            const cachedLocation = sessionStorage.getItem('resLocation');
            const ob = JSON.parse(cachedLocation);

            if(!((ob?.lat === location.lat) && (ob?.lng === location.lng))){
                sessionStorage.removeItem("resList");
                // setList([]);
            }
             
            const cachedData = sessionStorage.getItem("resList");

            if(cachedData){
                setResList(JSON.parse(cachedData));
                setList(JSON.parse(cachedData))
            }
            else{
                
                const URL = RES_LIST_URL+'lat='+location.lat+'&lng='+location.lng;
                const response = await fetch(URL);

                if (response.ok) {   // Check for successful response

                    const data = await response.json();

                    const resListData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                    sessionStorage.setItem('resLocation',JSON.stringify(location));
                    sessionStorage.setItem("resList",JSON.stringify(resListData));
                    setResList(resListData);
                    setList(resListData);
                }
                 else {
                     console.error("Error fetching data");
                  }
            }

        }catch(err){
            console.log("Error in useRestaurantList hook : ",err);
        }
    }

    useEffect(()=>{
        fetchList();
    },[location]);

    return resList;
}

export default useRestaurantList;











