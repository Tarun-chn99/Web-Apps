import { useEffect, useState } from "react";
import { BACK_ICON, LOCATION_SUGGESTION_API } from "../utils/constants";
import getLocation from '../utils/getLocation'
import { useDispatch } from "react-redux";
import { setLocation } from "../AppStore/appSlice.js";


const UserLocation = () => {

    const [locationInfo,setLocationInfo] = useState('');
    const [suggestions,setSuggestions] = useState(null);
    const [isSuggestionsOpen,setIsSuggestionsOpen] = useState(false);
    const dispatch = useDispatch();

    const getLocationSuggestions = async (query) => {
        
        try{
            const response = await fetch(LOCATION_SUGGESTION_API + 'input=' + query);
            const data = await response.json();
            setSuggestions(data?.data);
        }
        catch(error){
            console.log(error.message);
        }
    }
    
    const handleClick = async (location) => {

        setIsSuggestionsOpen(false);
        setLocationInfo(location.description);
        const locationId = location.place_id;
        const locationInfo = await getLocation(locationId);
        dispatch(setLocation(locationInfo));
    }

    useEffect(()=>{

        let timerid = setTimeout(()=>{
            getLocationSuggestions(locationInfo);
        },200);

        return () => clearTimeout(timerid);

    },[locationInfo]);
    
    return (
        <div className="mx-2" onSubmit={(e)=>e.preventDefault()}>
            
            {/* For big devices - laptops, tabs */}
            <div className="relative hidden md:block">
                <input 
                    className='p-3 rounded-xl text-xs mx-4 bg-gray-200 text-black outline-none border-none w-52' 
                    type="text" 
                    value={locationInfo}
                    placeholder="Enter precise location..."
                    onChange={(e)=>setLocationInfo(e.target.value)}
                    onFocus={() => setIsSuggestionsOpen(true)}
                    onBlur={() =>setTimeout(()=>setIsSuggestionsOpen(false),200)}
                    />
                {
                    (suggestions && isSuggestionsOpen) && <ul className="absolute left-0 top-12 h-max w-96 p-4 ml-4 bg-gray-100 rounded-xl z-20">
                        
                        {suggestions?.map((location,index) => {
                            return <li  key={index} 
                                        className='p-4 cursor-pointer w-full hover:bg-gray-200 rounded-xl' 
                                        onClick={()=>handleClick(location)}>{location.description}</li>
                        })}

                    </ul>
                }

            </div>

            {/* For Mobile devices */}
            <span className="md:hidden bg-black cursor-pointer w-20" onClick={() => setIsSuggestionsOpen(true)}>
                <img className="w-6 rounded-md mx-2 p-1 bg-gray-400" src="https://cdn-icons-png.flaticon.com/512/0/619.png" alt="location"/>
            </span>  
            {
                isSuggestionsOpen && 
                    
                    <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-gray-400 z-1000">
                        
                        <div className="flex bg-white h-[8%]">
                            <img className='w-8 p-2 ml-2 my-2 bg-gray-300 hover:bg-gray-500 cursor-pointer' 
                                 src={BACK_ICON} 
                                 alt='back' 
                                 width="100%"
                                 onClick={()=>setIsSuggestionsOpen(false)}/>
                            <input 
                                    className='p-3 rounded-xl text-xs bg-white text-black outline-none border-none w-full' 
                                    type="text" 
                                    value={locationInfo}
                                    placeholder="Enter precise location..."
                                    onChange={(e)=>setLocationInfo(e.target.value)}
                                    autoFocus
                                />
                        </div>

                        {
                            suggestions && <ul className="h-[92%] w-full p-4 bg-gray-100">
                        
                                {suggestions?.map((location,index) => {
                                    return <div key={index} >
                                                <li  
                                                    className='p-4 cursor-pointer w-full hover:bg-gray-200 text-sm rounded-xl' 
                                                    onClick={()=>handleClick(location)}>
                                                {location.description}</li>
                                                <hr/>
                                            </div>
                                })}
    
                            </ul>
                        }

                    </div>
            }

        </div>
    );

}
export default UserLocation;