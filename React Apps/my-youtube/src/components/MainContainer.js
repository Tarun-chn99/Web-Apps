import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";


const MainContainer = () => {
    return (
        <div className="w-10/12 overflow-auto">
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}

export default MainContainer;