import ItemCard from "./ItemCard";
import {useSelector,useDispatch} from "react-redux"
import { clearCart } from "../AppStore/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.cartData.restaurantData.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div className="cart" >
            <h1 className="text-xl italic font-bold text-center">Cart</h1>
            <button className="cartButton" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.map((item) => console.log(item))}
        </div>
    )
}

export default Cart;



// {cartItems.map((item) => <ItemCard itemInfo={item} key={item?.id}/>)}