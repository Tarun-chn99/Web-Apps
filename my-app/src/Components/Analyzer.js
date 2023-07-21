import { useState } from "react";

function Analyzer(){

    const [text,setText] = useState("");

    const handleOnChange = event => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const clearText = () => {
        setText("");
    }

    return(
        <>

            <div className="editor">
                
                <h3>Text Anlayzer</h3>
                <textarea rows={8} id="text" value={text} onChange={handleOnChange}></textarea>
                <button className="buttn txt-white bg-dark-blue onhover-bg-sea-green"  onClick={handleUpperCase}>Uppercase</button>
                <button className="buttn txt-white bg-dark-blue onhover-bg-sea-green "  onClick={handleLowerCase}>Lowercase</button>
                <button className="buttn txt-white bg-dark-blue onhover-bg-sea-green "  onClick={clearText}>Clear</button>
                <p id="print"></p>
            </div>


        </>
    );
}

export default Analyzer;