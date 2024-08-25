import { LOCATION_INFO_API } from "./constants";

const getLocation = async (locationId) => {
    try{
        const response = await fetch(LOCATION_INFO_API+locationId);
        const data = await response.json();
        return data?.data?.[0]?.geometry?.location;
    }
    catch(error){
        console.log(error.message);
    }
}

export default getLocation;