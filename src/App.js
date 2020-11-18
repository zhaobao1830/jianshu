import React from "react";
import { Provider } from 'react-redux';
import Header from './common/header/index';
import store from "./store";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail" component={Detail}/>
      </Router>
    </Provider>
  );
}

export default App;
