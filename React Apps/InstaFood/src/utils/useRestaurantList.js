import { useEffect,useState } from "react";
import { RES_LIST_URL } from "../utils/constants";


const useRestaurantList = (setList) => {
    
    const [resList, setResList] = useState([]);

    useEffect(()=>{
        fetchList();
    },[]);
    

    const fetchList = async () => {

        try{
            const cachedData = sessionStorage.getItem("resList");
            
            if(cachedData){
                setResList(JSON.parse(cachedData));
                setList(JSON.parse(cachedData))
            }       
            else{

                const response = await fetch(RES_LIST_URL);

                if (response.ok) {   // Check for successful response
                    
                    const data = await response.json();
                    const resListData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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
    return resList;
}

export default useRestaurantList;












// import { RES_LIST_UPDATE_URL, RESLIST_UPDATE_REQ_BODY, RESLIST_UPDATE_CONFIG } from "./constants";
// import { update } from "./useRestaurantListUpdate";
// update(RES_LIST_UPDATE_URL, RESLIST_UPDATE_REQ_BODY, RESLIST_UPDATE_CONFIG);
