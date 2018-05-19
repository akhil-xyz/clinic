import React, { Component } from 'react';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
