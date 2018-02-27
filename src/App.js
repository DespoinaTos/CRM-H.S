import React, { Component } from 'react';
import './Normalize.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LoginForm from './Components/Login Form/LoginForm';
import { BrowserRouter as Router } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default App;
