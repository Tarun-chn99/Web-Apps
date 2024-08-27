import { useDispatch, useSelector } from "react-redux"
import { addItem, clearCart, hideCartResetPopup } from "../AppStore/cartSlice";

const CartResetPopupCard = () => {

    const dispatch = useDispatch();
    const currentItem  = useSelector((store) => store.cart.cartData.tempItemInfo);
    console.log(currentItem);

    const handleNoButton = () => dispatch(hideCartResetPopup());

    const handleYesButton = () => {
        dispatch(clearCart());
        dispatch(addItem(currentItem));
        dispatch(hideCartResetPopup());
    }

    return (
    <div title='cart reset popup' className="fixed flex left-0 right-0 bottom-20 justify-center z-20">
            
            <div className="p-8 rounded-xl shadow-2xl bg-slate-200 w-[32rem]">
                <h4 className="font-bold text-lg my-2">Items already in cart</h4>
                <p className="text-xs">Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?</p>
                <div className='mt-4 flex items-center justify-between w-full'>
                    <button className="px-6 mr-4 py-2 bg-white border-green-600 border b-2 font-bold rounded-lg w-1/2 hover:shadow-lg cursor-pointer" onClick={handleNoButton}>NO</button>
                    <button className="px-6 py-2 ml-4 mt-0 bg-green-600 font-bold rounded-lg w-1/2 text-white hover:shadown-lg cursor-pointer" onClick={handleYesButton}>YES, START AFRESH</button>
                </div>
            </div>

    </div>
  )
}

export default CartResetPopupCard
