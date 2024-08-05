import Header from './Header';
// import { NETFLIX_BG_IMG } from '../utils/constants';

const Home = () => {
  return (
    <>
    <div data-info="background image" className={`relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg')] bg-cover bg-center h-screen overflow-auto` }>
      
      <div data-info="black-highlight screen" className="bg-gradient-to-b from-black absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-[0.5]"></div>
      <Header/>
    </div>
    </>
  );
};

export default Home;
