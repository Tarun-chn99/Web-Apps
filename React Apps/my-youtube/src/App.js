import MyYoutube from './components/MyYoutube';
import appStore from './appStore/store';
import { Provider } from 'react-redux';

function App() {
  return <Provider store={appStore}>
          <MyYoutube/>
        </Provider>
}

export default App;
