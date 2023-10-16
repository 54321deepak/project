import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import Ready from './components/Ready/Ready';
import Questions from './components/Questions/Questions';
import Tutorial from './components/Tutorial/Tutorial';
import Price from './components/Price/Price';
function App() {
  return (<>
    {/* <Header /> */}
    <Price />
    <Tutorial />
    <Questions />
    <Ready />
    <Footer />
  </>
  );
}

export default App;
