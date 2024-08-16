import { YOUTUBE_SUGGESTIONS_API } from './constants'

const fetchSearchSuggestions = async (query) => {

    const response = await fetch(YOUTUBE_SUGGESTIONS_API+query);
    const suggestions = await response.json();
    
    console.log(suggestions[1]);
}

  export default fetchSearchSuggestions;