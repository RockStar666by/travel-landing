import React from 'react';
import './App.css';
import { Greetings } from './components/Greetings';
import { Header } from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Greetings />
      </main>
    </div>
  );
}

export default App;
