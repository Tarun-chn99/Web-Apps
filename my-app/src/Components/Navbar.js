import {FaUser} from 'react-icons/fa';

export default function Navbar(props){
    return(

        <nav className="menu bg-sea-green flex-container flex-space flex-center">

                    <div>
                        <a href="/" className="buttn txt-black"><b>ANALYZER</b></a>
                        <a href="/" className="buttn txt-black onhover-white">Home</a>
                        <a href="/" className="buttn txt-black onhover-white">About</a>
                        <a href="/" className="buttn txt-black onhover-white">Contact</a>
                        <a href="/" className="buttn txt-black onhover-white">Pages</a>
                    </div>
                    <div className='flex-container flex-center '>
                        <div class="form-check form-switch margin-lr1">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault"><strong>Enable LightMode</strong></label>
                        </div>
                        <div className="user ">
                            <a href="/" className="buttn" ><FaUser size={15}/></a>
                        </div>
                    </div>
                    
        </nav>
    );
}
