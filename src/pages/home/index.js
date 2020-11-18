import React, { Component } from 'react';
import HomeCss from './home.module.css';

class Home extends Component {
  render() {
    return (
      <div className={HomeCss.home}>Home</div>
    )
  }
}

export default Home;