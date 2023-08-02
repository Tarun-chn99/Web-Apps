import { useState } from "react";
// import Button from "./Button"


function Analyzer(props){

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
        props.showAlert("Converted to uppercase!");
    }    
   
    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!");
    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Text cleared!");
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied!");
    }

    const handleXtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed!");
    }

    const handleBold = () => {
        if(bold === "off"){
            setBold("boldFont");
            document.getElementById("text").classList.add("boldFont");
            document.getElementById("prev").classList.add("boldFont");
        }
        else{
            setBold("off");
            document.getElementById("text").classList.remove("boldFont");
            document.getElementById("prev").classList.remove("boldFont");
        }

    }

    const handleItalic = () => {
        if(italic === "off"){
            setItalic("italicFont");
            document.getElementById("text").classList.add("italicFont");
            document.getElementById("prev").classList.add("italicFont");

        }
        else{
            setItalic("off");
            document.getElementById("text").classList.remove("italicFont");
            document.getElementById("prev").classList.remove("italicFont");

        }    
    }

    const handleUnderline = () => {
        if(underline === "off"){
            setUnderline("underlineFont");
            document.getElementById("text").classList.add("underlineFont");
            document.getElementById("prev").classList.add("underlineFont");
        }
        else{
            setUnderline("off");
            document.getElementById("text").classList.remove("underlineFont");
            document.getElementById("prev").classList.remove("underlineFont");

        }    
    }

    const handleClearEffects = () => {
        document.getElementById("text").classList.remove("boldFont");
        document.getElementById("text").classList.remove("italicFont");
        document.getElementById("text").classList.remove("underlineFont");
        document.getElementById("prev").classList.remove("boldFont");
        document.getElementById("prev").classList.remove("italicFont");
        document.getElementById("prev").classList.remove("underlineFont");

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
                <hr />
                <div datatype="actionButtons" style={{margin:'0.25rem'}}>
                    {/* <Button text={text} mode={props.mode} func={handleUpperCase} data={"UpperCase"}/> */}
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
                <textarea className="" rows={8} id="text" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#c3c3cb' : 'white'}}>Hello World</textarea>


                <hr />  

                <h3>Text Summary</h3>
                <span className="margin-lr1"><strong>Words : </strong>{words}</span>
                <span className="margin-lr1"><strong>Characters : </strong> {characters}</span>
                <span className="margin-lr1"><strong>Time to read : </strong>{(words * 0.004) + " Minutes"}</span>

                <br /><br />
                <h3>Preview</h3>
                <span className="margin-lr1" id = 'prev'>{text.length > 0 ? text : "Type anything to preview !"}</span>

            </div>

        </>
    );
}

export default Analyzer;