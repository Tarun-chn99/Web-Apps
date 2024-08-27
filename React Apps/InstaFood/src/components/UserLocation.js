import { useCallback, useRef, useState } from "react";
import { LOCATION_SUGGESTION_API } from "../utils/constants";
import getLocation from '../utils/getLocation'
import {debounce} from '../hooks/useDebounceSearchHandler';
import { useDispatch } from "react-redux";
import { setLocation } from "../AppStore/appSlice";


const UserLocation = () => {

    const locationInput = useRef();
    const [suggestions,setSuggestions] = useState(null);
    const [isSuggestionsOpen,setIsSuggestionsOpen] = useState(false);
    const dispatch = useDispatch();
    
    const getLocationSuggestions = async (query) => {
        try{
            const response = await fetch(LOCATION_SUGGESTION_API+query+'&types=');
            const data = await response.json();
            setSuggestions(data?.data);
        }
        catch(error){
            console.log(error.message);
        }
    }
    
    const handleClick = async (location) => {
        
        locationInput.current.value = location.description;
        const locationId = location.place_id;
        const locationInfo = await getLocation(locationId);
        dispatch(setLocation(locationInfo));
    }

    const fetchSuggestions = useCallback(debounce(getLocationSuggestions,1000),[getLocationSuggestions]);
    const onChange = () => fetchSuggestions(locationInput.current.value);
    
    return (
        <form className="relative mx-4" onSubmit={(e)=>e.preventDefault()}>
            <input 
                ref={locationInput} 
                className='p-4 rounded-xl mx-4 bg-gray-200 text-black outline-none border-none' 
                type="text" 
                placeholder="Enter precise location..."
                onChange={onChange}
                onFocus={() => setIsSuggestionsOpen(true)}
                onBlur={() =>setTimeout(()=>setIsSuggestionsOpen(false),200)}
            />          
            {
                (suggestions && isSuggestionsOpen) && <ul className="absolute left-0 top-18 w-96 p-4 ml-4 bg-gray-100 rounded-xl z-10">
                    
                    {suggestions?.map((location,index) => <li key={index} className='p-4 cursor-pointer w-full hover:bg-gray-200 rounded-xl' onClick={()=>handleClick(location)}>{location.description}</li>)}

                </ul>
            }
        </form>
    );

}
export default UserLocation;