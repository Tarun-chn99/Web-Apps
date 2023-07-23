import { useState } from "react";

function Analyzer(){

    const [text,setText] = useState("");
    let newText = text.split(/\s+/).join(" ");
    const content = newText.trim().split(" "); 
    const words = ( content[0] === "") ? 0 : content.length;
    const characters = text.trim().split("").length;

    const handleOnChange = event => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleClearText = () => {
        setText("");
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
    }

    const handleXtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
    }

    return(
        <>

            <div className="editor">
                
                <h2>Text Anlayzer</h2>
                <textarea rows={8} id="text" value={text} onChange={handleOnChange}></textarea>

                <div datatype="actionButtons" style={{margin:'0.25rem'}}>
                    <button disabled={text.length === 0} className="buttn txt-white bg-dark-blue onhover-bg-sea-green"  onClick={handleUpperCase}>Uppercase</button>
                    <button disabled={text.length === 0} className="buttn txt-white bg-dark-blue onhover-bg-sea-green "  onClick={handleLowerCase}>Lowercase</button>
                    <button disabled={text.length === 0} className="buttn txt-white bg-dark-blue onhover-bg-sea-green "  onClick={handleClearText}>Clear</button>
                    <button disabled={text.length === 0} className="buttn txt-white bg-dark-blue onhover-bg-sea-green "  onClick={handleCopyText}>Copy</button>
                    <button disabled={text.length === 0} className="buttn txt-white bg-dark-blue onhover-bg-sea-green "  onClick={handleXtraSpaces}>Remove Extra Spaces</button>
                </div>

                <hr />  

                <h3>Text Summary</h3>
                <span className="margin-lr1"><strong>Words : </strong>{words}</span>
                <span className="margin-lr1"><strong>Characters : </strong> {characters}</span>
                <span className="margin-lr1"><strong>Time to read : </strong>{(words * 0.004) + " Minutes"}</span>
    
            </div>

        </>
    );
}

export default Analyzer;