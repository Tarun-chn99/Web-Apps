import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API } from '../utils/constants'


const usePopularVideos = () => {

    const [videoList,setVideoList] = useState(null);

    const fetchVideos = async () => {
        try{          
            const data = window.sessionStorage.getItem('videoList');
            if(data){
                
            }
            else{
                const response = await fetch(YOUTUBE_VIDEO_API+process.env.REACT_APP_YOUTUBE_API_KEY);
                const data = await response.json();
                const list = data.itmes;
                sessionStorage.setItem('videoList',list.JSON());
                setVideoList(data.items);
                
                
            }

        }catch(error){
                console.log(error.message)
            }   
        }

        

    useEffect(()=>{
        fetchVideos();
       //eslint-disable-next-line
    },[]);

    return videoList;
}

export default usePopularVideos;