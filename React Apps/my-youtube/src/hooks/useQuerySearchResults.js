import { useEffect, useState } from "react";
// import { YOUTUBE_SEARCH_RESULTS } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const useQuerySearchResults = () => {
    
    const [searchResults,setSearchResults] = useState(null);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('search_query');

    const fetchResults = async (query) => {

        try{

            const cachedData = sessionStorage.getItem(query);

            if(cachedData){
                setSearchResults(JSON.parse(cachedData));
            }
            else{
                const response = await fetch('https://youtube.googleapis.com/youtube/v3/search?maxResults=50&key=AIzaSyCgMR5hyvLi2P8DnMEAkYWVcfZEEKMJjFo&q=%27iphone14%27');  
                const data = await response.json();
                sessionStorage.setItem(query,JSON.stringify(data));
                setSearchResults(data); 
            }
        }
        catch(error){
            console.log(error.code);
        }

    }

    useEffect(()=>{
        fetchResults(query);
        //eslint-disable-next-line
    },[]);

    return searchResults;
}

export default useQuerySearchResults;

// YOUTUBE_SEARCH_RESULTS+process.env.REACT_APP_YOUTUBE_API_KEY+'&q='+query