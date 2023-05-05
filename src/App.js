import React from 'react';
// components
import AbuotUs from './components/AbuotUs';
import Header from './components/Header';
import Main from './components/Main'
import AboutFood from './components/AboutFood';
import TypeIce from './components/TypeIce'

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <AbuotUs />
      <AboutFood />
      <TypeIce />
    </div>
  );
};

export default App;