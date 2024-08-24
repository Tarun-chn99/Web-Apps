import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../appStore/slices.js/appSlice"
import { MENU_LOGO, SEARCH_LOGO, YOUTUBE_LOGO, YOUTUBE_SUGGESTIONS_API } from "../utils/constants"
import { useEffect, useState } from "react"
import { cacheSuggestions } from "../appStore/slices.js/cacheSlice"
import { Link } from "react-router-dom"


const Header = () => {
  
  const dispatch = useDispatch();
  const [query,setQuery] = useState('');
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const handleToggleMenu = () =>  dispatch(toggleMenu());
  const onChange = (e) => setQuery(e.target.value);
  const cachedSearchResults = useSelector(store => store.cache.suggestions);
  
  const fetchSearchSuggestions = async (query) => {
        const response = await fetch(YOUTUBE_SUGGESTIONS_API+query);
        const suggestions = await response.json();
        dispatch(cacheSuggestions({
          [query]: suggestions[1]
        }));
        setsuggestions(suggestions[1]);
  }
  
  useEffect(() => {
    
    let timerId = setTimeout(() => {
      if(cachedSearchResults?.[query])  setsuggestions(cachedSearchResults?.[query]);
      else  fetchSearchSuggestions(query)
    },1000);

    return () => clearTimeout(timerId);
    //eslint-disable-next-line
  },[query])
  
  return (
    <div className="flex p-2 justify-between w-screen items-center shadow-lg h-[8%]">

        <div className='flex'>
            <img className='w-8  h-8 mx-4 cursor-pointer' src={MENU_LOGO} alt='Menu' onClick={handleToggleMenu}/>
            <a href='/'><img className='w-32 h-8 mx-4 cursor-pointer' src={YOUTUBE_LOGO} alt='Youtube logo'/></a>
        </div>

        <div className="w-[40%] relative">
          <form className="flex w-full" onSubmit={(e)=> e.preventDefault()}>
            <input 
              value={query} 
              className='py-2 px-4 rounded-bl-2xl rounded-tl-2xl border-2 w-[90%]' 
              type='text' 
              id='search' 
              placeholder="Search" 
              onChange={onChange}
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}
            />
            <button className="border-2 border-l-0 py-2 px-4 rounded-tr-2xl rounded-br-2xl w-[10%]"><img className='w-8' src={SEARCH_LOGO} alt='search'/></button>
          </form>
          <ul className="absolute mt-2 w-[90%] bg-white rounded-xl shadow-lg overflow-hidden">
            {
              showSuggestions && suggestions?.map((element,index) => <Link key={index} to={'/results?search_query='+element}><li className='px-4 py-2 w-full inline-block hover:bg-gray-500 cursor-pointer font-bold'>{element}</li></Link>)
            }        
          </ul>
        </div>


        <div>
          <button className="bg-red-700 text-white py-4 px-8 font-bold rounded-lg ">Sign In</button>
        </div>
        
    </div>
  )
}

export default Header

