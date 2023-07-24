import { useState } from "react";

function Analyzer(props){

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

    let hoverColor;

    if(props.mode === 'dark')
    hoverColor = 'sea-green';
    else
    hoverColor = 'light-green';

    return(
        <>

            <div className="editor">
                
                <h2>Text Anlayzer</h2>
                <textarea rows={8} id="text" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#c3c3cb' : 'white'}}></textarea>

                <div datatype="actionButtons" style={{margin:'0.25rem'}}>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleUpperCase}>Uppercase</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleLowerCase}>Lowercase</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleClearText}>Clear</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleCopyText}>Copy</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleXtraSpaces}>Remove Extra Spaces</button>
                </div>

                <hr />  

                <h3>Text Summary</h3>
                <span className="margin-lr1"><strong>Words : </strong>{words}</span>
                <span className="margin-lr1"><strong>Characters : </strong> {characters}</span>
                <span className="margin-lr1"><strong>Time to read : </strong>{(words * 0.004) + " Minutes"}</span>

                <br /><br />
                <h3>Preview</h3>
                <span className="margin-lr1">{text.length > 0 ? text : "Type anything to preview !"}</span>
            </div>

        </>
    );
}

export default Analyzer;