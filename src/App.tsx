import React from 'react';
import './App.css';
import { Greetings } from './components/Greetings';
import { Header } from './components/Header';
import { HotSale } from './components/HotSale';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Greetings />
        <HotSale />
      </main>
    </div>
  );
}

export default App;
