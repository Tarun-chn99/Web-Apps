import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Shimmer from "./resListShimmer";
import useRestaurantList from "../hooks/useRestaurantList";
import Filter from "./Filter"
import useOnlineStatus from "../hooks/useOnlineStatus";


const Body = () => {

    const resList = useRef(null);
    const [restaurantList, setRestaurantList] = useState([]);
    const onlineStatus = useOnlineStatus();
    resList.current = useRestaurantList(setList);    

    function setList(props){
        setRestaurantList(props);
    }

    if(onlineStatus === false)
    return <h1 className="margin-2">Loooks like you're offline, Please check your internet connection</h1>

    return( 

            <div className="body-container relative">

                <Filter resList={resList.current} setList={setList} restaurantList={restaurantList}  />
                {restaurantList?.length !== 0 ?  
                <div className="res-container flex wrap space-evenly" id="res-container" >
                    {restaurantList?.map?.((res) => {
                        return  <Link className="linkStyle" key={res.info.id} to={`/restaurantMenu/${res.info.id}`} >
                                   <RestaurantCard resList={res}/>
                                </Link>
                    })}
                </div>
                :
                <Shimmer/>}

            </div>
    ); 
}

export default Body;




