import { useState,useRef, useEffect,useCallback } from "react";
import {debounce} from "../hooks/useDebounceSearchHandler";
import {Link} from "react-router-dom";
import SuggestionCard from "./SuggestionCard";


const Filter = (props) => {
    
    const {resList,setList,restaurantList} = props;
    const [text, setText] = useState("");  
    const inputElement = useRef(null);
    const suggestionList = useRef(null);    
        
    const handleTopRated = () => {
        const filteredList = resList.filter((res) => res.info.avgRating > 4.5);
        if (filteredList.length !== resList.length)  setList(filteredList);
    }
    
    const handleDefault = () => {
        setList(resList);
    };
    
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
            <div className="filter">
                <div className="search">
                    <input  className='p-4 bg-gray-200 outline-none rounded-xl' placeholder="Search..." type='text' ref={inputElement} data-testid="input" name="search" value={text} onChange={onChange} autoComplete='off' history='off'/>
                    <button className="p-4 outline-none rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-400" id='searchButton' onClick={()=>handleSearch(text)}>Search</button>
                    <button className="p-4 outline-none rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-400" onClick={handleTopRated}>Top Rated</button>
                    <button className="p-4 outline-none rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-400" onClick={handleDefault}>Default</button>
                    {/* <button className="p-4 outline-none rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-400"
                        onClick={()=>fetchMore()}>Update</button> */}
                </div>
                <div className="suggestions-box flex flex-column wrap " style={{display:"none"}} id="suggestions" ref={suggestionList}>
                    {
                        restaurantList?.map((res)=>{
                            return  <Link className="linkStyle" key={res.info.id} to={`/restaurantMenu/${res.info.id}`} >
                                        <SuggestionCard resList={res}/>
                                    </Link>
                        }
                    )}
                </div>
            </div>
    )
}

export default Filter;





