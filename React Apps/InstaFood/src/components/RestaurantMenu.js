import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./resListShimmer";
import MenuCategory from "./MenuCategory";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { useSelector } from "react-redux";
import CartResetPopupCard from "./CartResetPopupCard";
import { getMenuCategories } from "../utils/getMenuCategories.js"


const RestaurantMenu = () => {
    
    const {id} = useParams();
    const menu = useRestaurantMenu(id);     //custom hook to get restaurant menu
    const [showCategory,setshowCategory] = useState(0);
    const isCartResetPopupOpen = useSelector(store => store.cart.cartResetPopup); 

    if(menu === null)   return <Shimmer/>;      // early return

    const {
        name,
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        cloudinaryImageId,
        areaName,
        sla,
        expectationNotifiers    
    } = menu?.data?.cards?.[2].card?.card?.info;

    const resInfo = {id,name,areaName,cloudinaryImageId};
    const category = getMenuCategories(menu);

    return (
        <div className="w-[50rem] m-auto relative">
            
            <h2 className="my-8 mx-4 font-bold text-black tracking-wide">{name}</h2>

            <div className="px-4 pb-4 rounded-[2.5rem] bg-custom-gradient ">

                <div className="rounded-[2rem] p-4 bg-white">

                    <div className="flex items-center">
                        <div ><b><i>Rating: </i>{avgRating}  ({totalRatingsString})</b></div>
                        <div className="mx-4"><b>•</b></div>
                        <div><b>{costForTwoMessage}</b></div>
                    </div>
                    <div className="flex my-4 " style={{height:"3rem"}} >
                        <div className="mapSymbol h-full" >
                            <div className="dot"></div>
                            <div className="line"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="flex flex-col mx-4 justify-between text-[0.875rem] h-full" >
                            <p className='mt-[0.2rem]'><b>Outlet</b><span className="mx-4">{areaName}</span></p>
                            <p className='pt-4'><b>{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</b></p>
                        </div>
                    </div>

                </div>
            </div>

            <h3 className="text-center tracking-widest font-bold m-6 mt-8">MENU</h3>


            {/* Filter buttons */}
            <div className="search flex space-evenly">
                <button className="menuSearchButton textLightGray"><b>Search for dishes</b></button>
            </div>

            <div className="filter mx-4 my-4">
                <button className="py-2 px-4 bg-gray-400 rounded-xl mr-2">Pure Veg</button>
                <button className="py-2 px-4 bg-gray-400 rounded-xl mr-2">Bestseller</button>
            </div>
            <hr className="mt-8" />


            {/* Menu categories */}
            {
                category.map?.((element,index) => 
                    //controlled component
                            <MenuCategory 
                                resInfo={resInfo}
                                showCategory={index === showCategory}
                                category={element?.card?.card} 
                                key={element?.card?.card?.title} 
                                setshowCategory={()=> showCategory === index ? setshowCategory(null) : setshowCategory(index)}
                            />
                )
            }

            {isCartResetPopupOpen &&  <CartResetPopupCard />}

        </div>
    )
}

export default RestaurantMenu;




