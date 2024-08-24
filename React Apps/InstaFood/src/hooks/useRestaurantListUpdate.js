// import { RES_LIST_UPDATE_URL, RESLIST_UPDATE_REQ_BODY, RESLIST_UPDATE_CONFIG } from "./constants";

export const update = async(url,reqBody,config) => {
    
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if(response.ok)     console.log("Success");
        else                console.log("failure");
    }
    catch(error){
        console.log(error);
    }
}



