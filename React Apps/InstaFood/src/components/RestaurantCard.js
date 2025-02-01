import { RES_IMG_URL } from "../utils/constants";

export const RestaurantCard = (props) => {

    const {name,cloudinaryImageId,areaName,avgRating,sla} = props.resList?.info;
    const resCardClass = "w-[9.5rem] md:w-52 my-4 h-56 md:h-[18rem] mx-2 shadow-xl hover:scale-95 cursor-pointer duration-100 rounded-xl bg-[#f0f0f0]";

    return (
        <div className={resCardClass} data-testid="resCard">
            <img className="w-full h-[60%] md:h-[65%] rounded-xl " src={`${RES_IMG_URL}/${cloudinaryImageId}`} alt=""/>
            <div className="p-2 h-[40%] md:h-[35%] italic text-[0.65rem] md:text-xs">
                <h3>{name}</h3>
                <p><b>Rating : </b>{avgRating}</p>
                <p><b>Delivery Time : </b>{sla.deliveryTime} min</p>
                <p><b>Address : </b>{areaName}</p>
            </div>    
        </div>
      );
  }

export default RestaurantCard;








  
