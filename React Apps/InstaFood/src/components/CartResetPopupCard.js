import { useDispatch, useSelector } from "react-redux"
import { addItem, clearCart, hideCartResetPopup } from "../AppStore/cartSlice";

const CartResetPopupCard = () => {

    const dispatch = useDispatch();
    const currentItem  = useSelector((store) => store.cart.cartData.tempItemInfo);

    const handleNoButton = () => dispatch(hideCartResetPopup());

    const handleYesButton = () => {
        dispatch(clearCart());
        dispatch(addItem(currentItem));
        dispatch(hideCartResetPopup());
    }

    return (
    <div title='cart reset popup' className="fixed flex left-0 right-0 bottom-10 md:bottom-14 justify-center z-20">
            
            <div className="p-4 md:p-6 rounded-xl shadow-2xl bg-slate-200 w-[18rem] md:w-[25rem]">
                <h4 className="font-bold text-base my-2">Items already in cart</h4>
                <p className="text-[0.65rem] md:text-sm">Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?</p>
                <div className='mt-4 flex items-center justify-between w-full h-8 md:h-10'>
                    <button className="px-2 md:px-6 mr-2 md:mr-4 py-2 h-full bg-white border-green-600 border b-2 font-bold text-xs md:text-sm rounded-lg w-[40%] md:w-[40%] hover:shadow-lg cursor-pointer" onClick={handleNoButton}>NO</button>
                    <button className="px-2 md:px-6 py-2 ml-2 md:ml-4 h-full bg-green-600 font-bold rounded-lg w-[60%] text-xs md:text-sm text-white hover:shadown-lg cursor-pointer" onClick={handleYesButton}>YES, START AFRESH</button>
                </div>
            </div>

    </div>
  )
}

export default CartResetPopupCard
