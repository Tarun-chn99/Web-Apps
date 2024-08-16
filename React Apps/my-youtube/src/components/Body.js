import { Outlet } from "react-router-dom";
import SidePanel from "./SidePanel";

const Body= () => {
    console.log("Inside body")
    return(
        <div className="h-[92%] overflow-hidden flex">
            <SidePanel/>
            <Outlet/>
        </div>
    )
}

export default Body;