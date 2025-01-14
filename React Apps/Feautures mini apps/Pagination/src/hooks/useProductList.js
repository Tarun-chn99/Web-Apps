import { useEffect, useState } from "react";
import { PRODUCTS_URL } from "../utils/constants";

const useProductList = (setItemList) => {
    console.log(setItemList)
    const [list,setList] = useState([]);

    const fetchProducts = async () => {

        try{

            const response = await fetch(PRODUCTS_URL);

            if(response.ok){
                const data = await response.json();
                setList(data);
                setItemList(data);
            }
            else{
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        fetchProducts();
    },[]);

    return list;
}

export default useProductList;