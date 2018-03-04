import React, { Component } from 'react';
import './Normalize.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { injectGlobal } from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MainContent from './Components/Main Content/main';

injectGlobal`
body {
  background: #1f253d;
  color: white;
  font-family: sans-serif;
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
        <Header />
        <ReactCSSTransitionGroup
        transitionName='slide'
        transitionEnterTimeOut={500}
        transitionLeaveTimeOut={500}
        transitionAppear={true}
        transitionAppearTimeOut={500}
        >
        <MainContent />
        </ReactCSSTransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default App;
