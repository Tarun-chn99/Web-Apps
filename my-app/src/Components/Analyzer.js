import { useState } from "react";
// import Button from "./Button"


function Analyzer(props){

    const {mode,showAlert,hoverColor} = props;

    const [text,setText] = useState("");
    const [bold,setBold] = useState("off");
    const [italic,setItalic] = useState("off");
    const [underline,setUnderline] = useState("off");
    
    const newText = text.split(/\s+/).join(" ");
    const content = newText.trim().split(" "); 
    const words = ( content[0] === "") ? 0 : content.length;
    const characters = text.trim().split("").length;


    const handleOnChange = event => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
        showAlert("Converted to uppercase!");
    }    
   
    const handleLowerCase = () => {
        setText(text.toLowerCase());
        showAlert("Converted to lowercase!");
    }

    const handleClearText = () => {
        setText("");
        showAlert("Text cleared!");
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        showAlert("Text copied!");
    }

    const handleXtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        showAlert("Extra space removed!");
    }

    const addProps = (value) => {
        document.getElementById("text").classList.add(value);
        document.getElementById("prev").classList.add(value);
    }

    const removeProps = (value) => {
        document.getElementById("text").classList.remove(value);
        document.getElementById("prev").classList.remove(value);        
    }

    const handleBold = () => {
        let args = "boldFont";
        if(bold === "off"){
            setBold("on");
            addProps(args);
        }
        else{
            setBold("off");
            removeProps(args);
        }

    }

    const handleItalic = () => {
        let args = "italicFont";
        if(italic === "off"){
            setItalic("on");
            addProps(args);

        }
        else{
            setItalic("off");
            removeProps(args);

        }    
    }

    const handleUnderline = () => {
        let args = "underlineFont";
        if(underline === "off"){
            setUnderline("on");
            addProps(args);
        }
        else{
            setUnderline("off");
            removeProps(args);

        }    
    }

    const handleClearEffects = () => {
        removeProps("boldFont");
        removeProps("italicFont");
        removeProps("underlineFont");
    }

    let selectedText = "";
    const getSelectedText = () => {
     
        if (window.getSelection) {
            selectedText = window.getSelection();
        }else
        return;
        document.getElementById("highlight").innerHTML = selectedText;
    }

    return(
        <>

            <div className="editor">
                
                <h2>Text Anlayzer</h2>
                <hr />
                <div datatype="actionButtons" style={{margin:'0.25rem'}}>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleBold}>Bold</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleItalic}>Italic</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleCopyText}>Copy</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleUnderline}>Underline</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleUpperCase}>Uppercase</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleLowerCase}>Lowercase</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleClearText}>Clear</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleXtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length === 0} className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={handleClearEffects}>Remove Effects</button>
                </div>
                <hr />
                <textarea className="" onMouseUp={getSelectedText} rows={8} id="text" value={text} onChange={handleOnChange} style={{backgroundColor: mode === 'dark' ? '#c3c3cb' : 'white'}}>Hello World</textarea>
                <hr />  

                <h3>Text Summary</h3>
                <span className="margin-lr1"><strong>Words : </strong>{words}</span>
                <span className="margin-lr1"><strong>Characters : </strong> {characters}</span>
                <span className="margin-lr1"><strong>Time to read : </strong>{(words * 0.004) + " Minutes"}</span>

                <br /><br />
                <h3>Preview</h3>
                <span className="margin-lr1" id = 'prev' >{text.length > 0 ? text : "Type anything to preview !"}</span>

                <br />
                <br />
                <h3>Selected Text</h3>
                <span className="margin-lr1" id = 'highlight'>{selectedText}</span>

            </div>

        </>
    );
}

export default Analyzer;