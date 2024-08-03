import { useState,useRef, useEffect,useCallback } from "react";
import {debounce} from "../utils/useDebounceSearchHandler";
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
                    <input type='text' id="search" ref={inputElement} data-testid="input" name="search" value={text} onChange={onChange} className="" autoComplete='off' history='off'/>
                    <button id='searchButton' onClick={()=>handleSearch(text)}>Search</button>
                    <button onClick={handleTopRated}>Top Rated</button>
                    <button onClick={handleDefault}>Default</button>
                    {/* <button onClick={()=>fetchMore(url,body,header)}>Update</button> */}
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





