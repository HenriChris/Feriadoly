import React from 'react';
import Header from './components/Header';
import Scroller from './components/Scroller';
import Calendar from './components/Calendar';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Header />
      <Scroller />
      <div>
        <Calendar />
        <Card />
      </div>
    </div>
  );
}

export default App;
