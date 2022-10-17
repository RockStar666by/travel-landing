import React from 'react';
import './App.css';
import { Greetings } from './components/Greetings';
import { Header } from './components/Header';
import { HotSale } from './components/HotSale';
import { Vacations } from './components/Vacations';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Greetings />
        <HotSale />
        <Vacations />
      </main>
    </div>
  );
}

export default App;
