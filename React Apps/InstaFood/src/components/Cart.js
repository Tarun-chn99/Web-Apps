import {useSelector,useDispatch} from "react-redux"
import { clearCart } from "../AppStore/cartSlice";
import EmptyCart from "./EmptyCart";
import AccountCard from "./AccountCard";
import CartBill from "./CartBill";
import AddressCard from "./AddressCard";
import PaymentCard from "./PaymentCard";

const Cart = () => {

    const dispatch = useDispatch();
    const {id,name,imgId,items} = useSelector((store)=>store.cart.cartData.restaurantData);
    const itemTotalPrice = items.reduce((acc,curr) => acc+=curr.price/100,0);

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        id ? <div title='cart' className="bg-slate-200 h-full">

            <div title='cart container' className="w-3/4 mx-auto pt-12 " >

                <div className="flex justify-between items-center">
                    <h1 className="text-xl italic font-bold text-center px-8 py-4 my-2 rounded-lg bg-gray-400">Cart</h1>
                    <button className="px-8 py-4 rounded-lg bg-slate-800 font-bold text-white cursor-pointer my-2" onClick={handleClearCart}>Clear Cart</button>
                </div>    
                <hr className="py-[0.25rem] bg-slate-600"/>

                <div className="flex w-full justify-evenly items-start">
                    <div className="w-[70%] m-4">
                        <AccountCard />
                        <AddressCard />
                        <PaymentCard />
                    </div>
                    <CartBill data={{name,imgId,items,itemTotalPrice}}/>
                </div>

            </div>

        </div>
        :
        <EmptyCart/>
    )
}

export default Cart;



