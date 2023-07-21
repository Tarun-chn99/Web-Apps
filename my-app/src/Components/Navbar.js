import {FaUser} from 'react-icons/fa';

export default function Navbar(){
    return(

        <nav className="menu bg-sea-green flex-container flex-space flex-center">

                    <div>
                        <a href="/" className="buttn txt-black"><b>ANALYZER</b></a>
                        <a href="/" className="buttn txt-black onhover-white">Home</a>
                        <a href="/" className="buttn txt-black onhover-white">About</a>
                        <a href="/" className="buttn txt-black onhover-white">Contact</a>
                        <a href="/" className="buttn txt-black onhover-white">Pages</a>
                    </div>
                    <div className="user">
                        <a href="/" className="buttn" ><FaUser size={10}/></a>
                    </div>
                    
        </nav>
    );
}
