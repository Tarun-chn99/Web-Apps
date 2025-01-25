import { RES_IMG_URL } from "../utils/constants";

export const RestaurantCard = (props) => {

    const {name,cloudinaryImageId,areaName,avgRating,sla} = props.resList?.info;
    const resCardClass = "w-56 h-64 my-4 mx-2 shadow-xl hover:scale-95 cursor-pointer duration-100 rounded-xl bg-[#f0f0f0]";

    return (
        <div className={resCardClass} data-testid="resCard">
            <img className="w-full h-3/5 rounded-xl" src={`${RES_IMG_URL}/${cloudinaryImageId}`} alt=""/>
            <div className="p-2 italic text-xs">
                <h3>{name}</h3>
                <p><b>Rating : </b>{avgRating}</p>
                <p><b>Delivery Time : </b>{sla.deliveryTime} min</p>
                <p><b>Address : </b>{areaName}</p>
            </div>    
        </div>
      );
  }

export default RestaurantCard;








  
