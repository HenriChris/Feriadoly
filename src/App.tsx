import React from 'react';
import Header from './components/Header';
import Scroller from './components/Scroller';
import Calendar from './components/Calendar';
import Card from './components/Card';
import { Bottom, Page } from './global/global';

function App() {
  return (
    <Page>
      <Header />
      <Scroller />
      <Bottom>
        <Calendar />
        <Card />
      </Bottom>
    </Page>
  );
}

export default App;
