import { useState,useRef,useCallback } from "react";
import {debounce} from "../hooks/useDebounceSearchHandler";
import {Link} from "react-router-dom";
import SuggestionCard from "./SuggestionCard";


const Filter = (props) => {
    
    const {resList,setList,restaurantList} = props;
    const [text, setText] = useState("");  
    const inputElement = useRef(null);
    const suggestionList = useRef(null);    
    const filterButtonClass = "p-2 lg:p-3 outline-none text-xs bold rounded-xl bg-gray-400 cursor-pointer hover:bg-gray-600 hover:text-white mr-1 w-24 md:w-28 lg:w-28";

    const handleTopRated = () => {
        const filteredList = resList.filter((res) => res.info.avgRating > 4.5);
        if (filteredList.length !== resList.length)  setList(filteredList);
    }
    
    const handleDefault = () => setList(resList);
    
    function handleSearch(query){
        
        const arr = resList?.filter((val) => {
            return val?.info?.name?.toLowerCase()?.includes(query?.toLowerCase()) === true
        });
        setList(arr);
    }

    const searchHandler = useCallback(debounce(handleSearch,500),[handleSearch]);
    
    const onChange = (e) => {
        setText(e.target.value);
        searchHandler(e.target.value);
    }

    return (
            <div className="filter w-full">
                
                <div className="m-2">
                    
                    <input  className='p-2 lg:p-3 text-xs bg-gray-200 outline-none rounded-xl mb-2 lg:mb-0 w-full md:w-6/12 lg:w-6/12 mr-1 ' 
                            // onFocus = {() => {suggestionList.current.style.display = 'block'}}
                            // onBlur = {() => {setTimeout(()=>{suggestionList.current.style.display = 'none'},200)}}
                            placeholder="Search..." 
                            type='text' 
                            ref={inputElement} 
                            data-testid="input" 
                            name="search" 
                            value={text} 
                            onChange={onChange} 
                        />
                        <div className="md:inline-block lg:inline-block">

                            <button className={filterButtonClass} 
                                    onClick={()=>handleSearch(text)}>Search</button>

                            <button className={filterButtonClass} 
                                    onClick={handleTopRated}>Top Rated</button>

                            <button className={filterButtonClass} 
                                    onClick={handleDefault}>Default</button>
                        </div>
                </div>

                <div className="suggestions-box flex flex-column wrap " 
                     style={{display:"none"}} 
                     id="suggestions" 
                     ref={suggestionList}>
                    {
                        restaurantList?.map((res)=>{
                            return  <Link className="linkStyle" 
                                          key={res.info.id} 
                                        //   onClick={() => {setTimeout(()=>{},300)}}
                                          to={`/restaurantMenu/${res.info.id}`} >
                                        <SuggestionCard resList={res}/>
                                    </Link>
                        }
                    )}
                </div>

            </div>
    )
}

export default Filter;





