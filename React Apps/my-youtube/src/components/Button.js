import { useDispatch } from "react-redux";
import { setActiveFilterButton } from "../appStore/slices.js/appSlice";

const Button = ({ name,isActive,index}) => {

    const dispatch = useDispatch();
    const handleButtonClick = () => dispatch(setActiveFilterButton(index));

    return (
        <button 
            className={'px-4 py-2 font-bold mr-2 rounded-lg outline-none'+ (isActive ? ' bg-gray-400' : ' bg-gray-200 hover:bg-gray-500')}
            onClick={handleButtonClick}
            >
            {name}
        </button>
  )
}

export default Button
