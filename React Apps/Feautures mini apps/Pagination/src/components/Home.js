import { useRef, useState } from "react"
import useProductList from "../hooks/useProductList"

const Home = () => {

    const productList = useRef(null);
    const [itemList,setItemList] = useState(null);

    const setList = (data) => setItemList(data);
    productList.current = useProductList(setList);

    return (
        itemList && <div>   
            <h1 className='heading'>Product Lists</h1>
            
        </div>
    )
}

export default Home