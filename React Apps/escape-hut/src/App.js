import { Provider } from 'react-redux';
import EscapeHut from './components/EscapeHut';
import appStore from './appStore/appStore';


function App() {
  return <Provider store={appStore}>
            <EscapeHut />
         </Provider>
}

export default App;
