import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom"
import { closeSidePanel } from "../appStore/slices.js/appSlice";

const WatchPage = () => {

  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  dispatch(closeSidePanel());

  let videoId = searchParams.get('v');

  return (
    <div className='py-8 px-40'>
      <iframe 
        className='rounded-xl cursor-pointer' 
        width="1200" 
        height="600" 
        src={`https://www.youtube.com/embed/${videoId}?si=h4TnDlL8Lat4J1IL`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default WatchPage
