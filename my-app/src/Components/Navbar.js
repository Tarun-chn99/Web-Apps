import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

export default function Navbar(props) {
    
    const [toggleText, setToggleText] = useState('Enable LightMode');
    const [myStyle, setmyStyle] = useState({ backgroundColor: '#027a6d' });

    useEffect(() => {
    if (props.mode === 'light') {
        setToggleText('Enable DarkMode');
        setmyStyle({ backgroundColor: '#6eaa6e' });
    } 
    else {
        setToggleText('Enable LightMode');
        setmyStyle({ backgroundColor: '#027a6d' });
    }
    }, [props.mode]);

    return(

        <nav className="menu flex-container flex-space flex-center" style={myStyle}>

            <div style={{myStyle}} >
                <a href="/" className={"buttn txt-black"}><b>ANALYZER</b></a>
                <a href="/" className={'buttn txt-black onhover-white'}>Home</a>
                <a href="/" className={'buttn txt-black onhover-white'}>About</a>
                <a href="/" className={'buttn txt-black onhover-white'}>Contact</a>
                <a href="/" className={'buttn txt-black onhover-white'}>Pages</a>
            </div>
            <div className='flex-container flex-center '>
                <div className="form-check form-switch margin-lr1">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id='toggle'>{toggleText}</label>
                </div>
                <div className="user ">
                    <a href="/" className="buttn" ><FaUser size={15}/></a>
                </div>
            </div>
                    
        </nav>
    );
}
