import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoginForm from './Components/Login Form/LoginForm' 

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
