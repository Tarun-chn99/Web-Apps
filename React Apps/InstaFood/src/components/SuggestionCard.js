
const SuggestionCard = (props) => {

    const {name} = props.resList?.info;
    return <div className="suggestionCard">{name}</div>
}

export default SuggestionCard;