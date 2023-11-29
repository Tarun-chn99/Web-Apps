import { useEffect } from 'react';
import Notes from './Notes';

const Home = (props) => {
  const {showAlert} = props;
  useEffect(() => {
    showAlert("Welcome Back!");
  }, []);
  return (
      <div>
        <Notes showAlert={showAlert}/>
      </div>
  )
}

export default Home;