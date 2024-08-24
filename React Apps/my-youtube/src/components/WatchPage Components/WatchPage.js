import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom"
import { closeSidePanel } from "../../appStore/slices.js/appSlice";
import { useEffect } from "react";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";


const WatchPage = () => {

  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeSidePanel());
    //eslint-disable-next-line
  },[]);

  let videoId = searchParams.get('v');

  return (
    <div className='py-8 px-10 outline-none w-full flex overflow-y-auto'>

      <div className='w-[70%] '>
        <iframe 
          className='rounded-xl cursor-pointer w-full'  
          height='700'
          src={`https://www.youtube.com/embed/${videoId}?si=h4TnDlL8Lat4J1IL`} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          >
        </iframe>
        <CommentsContainer />
      </div>

      <div className='w-[30%]'>
        <LiveChat/>
      </div>

    </div>
  )
}

export default WatchPage
