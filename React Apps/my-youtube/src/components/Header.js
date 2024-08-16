import { useDispatch } from "react-redux"
import { toggleMenu } from "../appStore/slices.js/appSlice"
import { MENU_LOGO, SEARCH_LOGO, YOUTUBE_LOGO } from "../utils/constants"


const Header = () => {
  
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="flex p-2 justify-between w-screen items-center shadow-lg h-[8%]">

        <div className='flex'>
            <img className='w-8  h-8 mx-4 cursor-pointer' src={MENU_LOGO} alt='Menu' onClick={handleToggleMenu}/>
            <a href='/'><img className='w-32 h-8 mx-4 cursor-pointer' src={YOUTUBE_LOGO} alt='Youtube logo'/></a>
        </div>

        <div className="w-[40%]">
          <form className="flex w-full" onSubmit={(e)=> e.preventDefault()}>
            <input className='py-2 px-4 rounded-bl-2xl rounded-tl-2xl border-2 w-[90%]' type='text' id='search' placeholder="Search" />
            <button className="border-2 border-l-0 py-2 px-4 rounded-tr-2xl rounded-br-2xl w-[10%]"><img className='w-8' src={SEARCH_LOGO} alt='search'/></button>
          </form>
        </div>

        <div>
          <button className="bg-red-700 text-white py-4 px-8 font-bold rounded-lg ">Sign In</button>
        </div>
        
    </div>
  )
}

export default Header
