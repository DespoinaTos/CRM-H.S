import React, { Component } from 'react';
import './Normalize.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { injectGlobal } from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

injectGlobal`
body {
  background: #1f253d;
  color: white;
}

.slide-appear {
  opacity: 0;
}

.slide-appear.slide-appear-active {
  opacity: 1;
  transition: opacity 0.5s ease-in;
}
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactCSSTransitionGroup
        transitionName='slide'
        transitionEnterTimeOut={500}
        transitionLeaveTimeOut={500}
        transitionAppear={true}
        transitionAppearTimeOut={500}
        >
        <Header />
        </ReactCSSTransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default App;
