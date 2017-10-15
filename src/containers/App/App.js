import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Background } from './App.style';
import NavMenu from '../../components/NavMenu/NavMenu';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router';

hashHistory.listen(() => {
  window.scrollTo(0,0);
});

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
        <div>
          <NavMenu />
          <Background/>
          {this.props.children}
        </div>
    );
  }
}

export default App;
