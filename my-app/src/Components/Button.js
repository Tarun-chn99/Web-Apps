import React from 'react';

function Button(...props){

    // let hoverColor;
    
    // if(props.mode === 'dark')
    // hoverColor = 'sea-green';
    // else
    // hoverColor = 'light-green';

    return (
        <button className={`buttn txt-white bg-dark-blue onhover-bg-${props.hoverColor}`} onClick={props.func}>{props.content}</button>
    );
}

export default Button;