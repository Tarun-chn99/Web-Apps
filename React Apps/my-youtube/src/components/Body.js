import { Outlet } from "react-router-dom";
import SidePanel from "./SidePanel Components/SidePanel";

const Body= () => {

    return(
        <div className="h-[92%] overflow-auto flex">
            <SidePanel/>
            <Outlet/>
        </div>
    )
}

export default Body;