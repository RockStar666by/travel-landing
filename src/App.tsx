import React from 'react';
import './App.css';
import { ContactsForm } from './components/ContactsForm';
import { ContactsMap } from './components/ContactsMap';
import { Footer } from './components/Footer';
import { Greetings } from './components/Greetings';
import { Header } from './components/Header';
import { HotSale } from './components/HotSale';
import { Reviews } from './components/Reviews';
import { Vacations } from './components/Vacations';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Greetings />
        <HotSale />
        <Vacations />
        <Reviews />
        <ContactsForm />
        <ContactsMap></ContactsMap>
        <Footer />
      </main>
    </div>
  );
}

export default App;
