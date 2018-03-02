import React, { Component } from 'react';
import './Normalize.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
