import usePopularVideos from "../hooks/usePopularVideos"
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  
  const videoList = usePopularVideos();

  return (
    videoList && <div className="p-4 w-full flex flex-wrap justify-evenly">
      {
        videoList.map((video) => <Link key={video.id} to={'/watch?v='+video.id}><VideoCard info={video}/></Link>)
      }
    </div>
  )
}

export default VideoContainer
