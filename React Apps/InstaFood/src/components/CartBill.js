import { RES_IMG_URL } from "../utils/constants";

const CartBill = ({data}) => {

    const {name,imgId,items,itemTotalPrice} = data;

    return (
    <div title='bill section' className='w-[30%] p-4 bg-gray-400 rounded-lg m-4 flex-shrink-0'>

        <div className="flex items-center">
            <img className='w-12 rounded-lg' src={`${RES_IMG_URL}/${imgId}`} alt="res-img"/>
            <p className="py-2 mx-4 font-bold text-lg">{name}</p>
        </div>
        
        <div className="w-full my-4">
            {
                items && items.map((element) => {
                    return <div className="py-2 w-full flex justify-between items-center">
                        <span className="font-bold text-sm w-1/2">{element.name}</span>
                        <span className="font-bold text-sm">रु{element.price/100}</span>
                        </div>
                })
            }
        </div>
        
        <div className="my-2">
            <h4 className='py-2 font-bold text-lg'>Bill Details</h4>
            <div className="flex justify-between items-center my-2">
                <span className="my-1 font-bold text-sm">Item Total</span>
                <span className="my-1 font-bold text-sm">रु{itemTotalPrice}</span>
            </div>

            <div className="flex justify-between items-center my-2">
                <span className="my-1 font-bold text-sm">Platform fee</span>
                <span className="my-1 font-bold text-sm">रु6</span>
            </div>

            <hr className="py-[0.05rem] bg-slate-600"/>

            <div className="flex justify-between items-center my-2">
                <span className="my-1 font-bold text-lg">TO PAY</span>
                <span className="my-1 font-bold text-lg">रु{Math.ceil(itemTotalPrice+6)}</span>
            </div>
        </div>

    </div>
  )
}

export default CartBill
