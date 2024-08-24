
const VideoCard = ({ info }) => {

    const { title,thumbnails,channelTitle} = info.snippet;
    return(
        <div className="w-80 h-96 mx-2 my-2 shadow-lg rounded-2xl overflow-hidden ">
                <img className="w-full "  src={thumbnails.high.url} alt={title}/>
                <div className="py-2 px-1 ">
                    <h4 className="font-bold ">{title.slice(0,60)}...</h4>
                    <p className="text-gray-500 pt-1">{channelTitle}</p>
                    <p className="text-sm">{info.statistics.viewCount} views</p>
                </div>
        </div>
    )
}

export default VideoCard;