import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    
    return (
        <div className='homePage txt-center'>
           
           <img src="https://i.gadgets360cdn.com/large/whatsapp_logo_facebook_1583246690176.jpg" alt="logo" height="200" width="380" />
           <h2 className='txt-white'>AurApp</h2>
           <Link className='btn bg-sea-green txt-white' aria-current="page" to="/login" style={{marginTop:"5rem"}}>Let's Go !</Link>



        </div>
    );
}

export default Home;