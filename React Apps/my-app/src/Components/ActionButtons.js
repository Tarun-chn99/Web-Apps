import React from 'react';

function ActionButtons(props){

    return(

        <div datatype='action_buttons'  style={{margin:'0.25rem'}}>

            <Button content="Bold"                hoverColor={props.hoverColor} func={handleBold}/>
            <Button content="Italic"              hoverColor={props.hoverColor} func={handleItalic}/>
            <Button content="Underline"           hoverColor={props.hoverColor} func={handleUnderline}/>
            <Button content="Copy"                hoverColor={props.hoverColor} func={handleCopyText}/>
            <Button content="Uppercase"           hoverColor={props.hoverColor} func={handleUpperCase}/>
            <Button content="Lowercase"           hoverColor={props.hoverColor} func={handleLowerCase}/>
            <Button content="Clear"               hoverColor={props.hoverColor} func={handleClearText}/>
            <Button content="Remove Extra Spaces" hoverColor={props.hoverColor} func={handleXtraSpaces}/>
            <Button content="AC"                  hoverColor={props.hoverColor} func={handleClearEffects}/>

        </div>

    )
}

export default ActionButtons;