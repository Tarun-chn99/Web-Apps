import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../AppStore/cartSlice";
import {RES_IMG_URL} from "../utils/constants"


const ItemCard = ({itemInfo,resInfo}) => {

  const moreButton = useRef(); 
  const dispatch = useDispatch();
  const [expand,setExpand] = useState(false);
  const {name,itemAttribute,price,defaultPrice,ratings,description,id,imageId} = itemInfo;  

  const handleAddItems = () => dispatch(addItem({itemInfo,resInfo}));
  const handleExpand = () => {
    (expand === true) ?  setExpand('false') : setExpand('true');
    moreButton.current.style.display = "none";
  }

  return (
    <>
    <div className="flex w-full my-2 p-2 lg:p-4 justify-between items-center">
        
        <div className='w-3/5 lg:w-[80%] pr-4 lg:pr-8'>

          <h5 className="w-6">
              <img src={itemAttribute.vegClassifier === 'VEG' ? 
                          'https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg' 
                          :'https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png' }
                   alt={itemAttribute.vegClassifier}
                   width='100'    
                 />
          </h5>

          <h3 className="mt-2 font-bold text-base lg:text-lg"><i>{name}</i></h3>
          <p className="text-sm lg:text-lg"><i>Rs.{price ? price/100 : defaultPrice/100}</i></p>

            { 
              (Object.keys(ratings.aggregatedRating).length !== 0) ?
              <p className="margin-tb-half textGreen">
                <i>
                  <b>Rating: {ratings.aggregatedRating.rating} </b>
                  ({ratings.aggregatedRating.ratingCount.split(" ")[0]})
                </i>
              </p>
              : <p className="margin-tb1"></p>
            }

          <p className="hidden md:block lg:block"><i>
            
            {(Object.keys(itemInfo).find((val)=>{return val==="description"}) === "description") ? 
              ((expand === false) ? description.slice(0,120) : description )  : ""}

            {(description.length > 120) && <button ref={moreButton} className="moreButton" onClick={handleExpand}><b>...more</b></button>}

          </i></p>

          <p className="block md:hidden lg:hidden"><i>
            
            {(Object.keys(itemInfo).find((val)=>{return val==="description"}) === "description") ? 
              ((expand === false) ? description.slice(0,50) : description )  : ""}

            {(description?.length > 40) && <button ref={moreButton} className="moreButton" onClick={handleExpand}><b>...more</b></button>}

          </i></p>


        </div>
        
        <div className="w-[10rem] lg:w-[16rem] h-30 lg:h-40 relative rounded-xl overflow-hidden ">
          <img className='object-fit' src={RES_IMG_URL+imageId} alt="" width='100%' height='100%' />
          <p className="absolute bottom-[10%] left-0 right-0 w-full text-center ">
            <button className="px-6 py-2 text-sm lg:text-base border-none cursor-pointer font-semibold text-[#f0f0f0] bg-gray-700 outline-none rounded-xl hover:bg-slate-800" onClick={handleAddItems}>Add</button>
          </p>
        </div>

    </div>
    <hr />
    </>
  )
  }

export default ItemCard;




