import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className="w-80 mx-auto mt-24 text-center ">
        <img className='mx-auto w-96' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="dishes" />
        <h3 className="text-lg font-bold text-gray-700 my-2">Your cart is empty</h3>
        <p className="text-xs text-gray-400 font-bold my-2">You can go to home page to view more restaurants</p>
        <Link to='/'><button className="mx-auto bg-green-500 text-white font-bold py-4 px-8 rounded-xl my-2 cursor-pointer outline-none">SEE RESTAURANTS NEAR YOU</button></Link>
    </div>
  )
}

export default EmptyCart
