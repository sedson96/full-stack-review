import React from 'react';
import {HashRouter} from "react-router-dom"
import {Provider} from "react-redux"
import "./reset.css"
import './App.css';
import store from "./store"
import routes from './routes';


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
          {routes}
      </HashRouter>
    </Provider>
  );
}

export default App;
