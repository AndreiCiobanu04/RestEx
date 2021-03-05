import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Application from './Application';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import { messagesReducer } from './components/redux/messagesReducer';

function App() {
  const store = createStore(messagesReducer)

  return (
    <div className="App">
      <Provider store={store}>
      <Application />
      </Provider>
    </div>
  );
}

export default App;
