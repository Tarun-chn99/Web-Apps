import { LOGO_URL } from "./constants";

const generateHeaderItems = (auth) => {

    const company_name = 'InstaFood';
    const headerLinkClass = 'px-2 py-2 mx-1 text-sm cursor-pointer hover:text-orange-500 transition duration-500';
    const headerButtonClass = 'px-6 py-2 mx-4 text-sm rounded-lg outline-none cursor-pointer bg-gray-200 hover:bg-gray-400 font-bold';
    const buttonLabel = auth ? 'LogOut' : 'Login';
    const status_icon = 'inline-block p-[0.5rem] rounded-[2rem] w-[0.25rem] bg-[#52c152] mx-4';
  
    return {
        company_name,
        headerLinkClass,
        headerButtonClass,
        buttonLabel,
        status_icon,
        LOGO_URL
    }
}

export default generateHeaderItems
