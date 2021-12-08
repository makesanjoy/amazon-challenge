import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './reducer'
import { StateProvider} from './StateProvider'


//Reducer is actually how we are able to dispatch or send the data to the data layer
//It plays the role of pushing data to the data layer

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
      {/* initialState is what does the data layer look like in the beginning
      and reducer is how we manipulate with the data layer */}
    
    <App />
</StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


