import React from "react";
import { Provider } from 'react-redux';
import Header from './common/header/index';
import store from "./store";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Router>
        <Route exact path="/" render={() => <div>home</div>}/>
        <Route exact path="/detail" render={() => <div>detail</div>}/>
      </Router>
    </Provider>
  );
}

export default App;
