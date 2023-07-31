import React from 'react';

function Button(...props){

    let hoverColor;
    
    if(props.mode === 'dark')
    hoverColor = 'sea-green';
    else
    hoverColor = 'light-green';

    return (
        <>
        <button className={`buttn txt-white bg-dark-blue onhover-bg-${hoverColor}`}  onClick={props.func}>
          Hello
        </button>
        {/* <p>{props}</p> */}
        </>
    );
}

export default Button;