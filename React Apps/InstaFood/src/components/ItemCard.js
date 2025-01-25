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
    <div className="flex w-full p-4 justify-between">
        
        <div className='w-[80%] pr-8'>

          <h5 className="font-bold">TYPE : {itemAttribute.vegClassifier}</h5>
          <h3 className="mt-4 font-bold"><i>{name}</i></h3>
          <p ><i>Rs.{price ? price/100 : defaultPrice/100}</i></p>

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

          <p className="text-sm"><i>
            
            {(Object.keys(itemInfo).find((val)=>{return val==="description"}) === "description") ? 
              ((expand === false) ? description.slice(0,140) : description )  : ""}

            <button ref={moreButton} className="moreButton" onClick={handleExpand}><b>...more</b></button>
          </i></p>

        </div>
        
        <div className="mealImage relative">
          <img src={RES_IMG_URL+imageId} alt="" width='100%' height='100%' />
          <p className="addToCartButtonContainer">
            <button className="addToCartButtn outline-none" onClick={handleAddItems}>Add</button>
          </p>
        </div>

    </div>
    <hr />
    </>
  )
  }

export default ItemCard;




