import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { DEFAULT_FILTER_BUTTON } from "../../utils/constants";


const MainContainer = () => {

    const isMenuOpen = useSelector((store) => store.app.isSidePanelOpen);
    
    return (
        <div className={"overflow-auto outline-none" + (isMenuOpen ? ' w-10/12' : ' w-full')}>
            <ButtonList buttonList={DEFAULT_FILTER_BUTTON}/>
            <VideoContainer/>
        </div>
    );
}
    
export default MainContainer;
        
