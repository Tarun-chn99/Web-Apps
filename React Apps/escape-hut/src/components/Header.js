import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { removeUser } from '../appStore/userSlice';
import { USER_AVATAR } from '../utils/constants';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const route = window.location.pathname;
  const logo_width = (route === '/login') ? 'w-48' : 'w-36';
  const navbar_style = (route === '/login') ? 
                        'px-44 py-4 absolute top-0 z-[2] flex justify-between' 
                      : 'px-12 py-4 absolute top-0 z-[2] flex justify-between w-full items-center';


  const handleSignOut = () =>{
    signOut(auth).catch((error) => {
      console.log(error);
    });
  }


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        navigate('/browse');
      } 
      else {
        dispatch(removeUser());
        navigate('/login')
      }
    });

    return () => unSubscribe();
    // eslint-disable-next-line 
 },[]);

  return (
    <div className={`${navbar_style}`}>
      <img className={`${logo_width}`} src={USER_AVATAR} alt=''/>
      {
        (route === '/browse') && 
        <div className="flex items-center">
          <img className='w-8 h-8 rounded-sm' alt='user_icon' src='https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4'/>
          <button className='p-2 mx-2 bg-red-700 text-white font-bold rounded-lg' onClick={handleSignOut}>Sign out</button>
        </div>
      }
    </div>
  )
}

export default Header
