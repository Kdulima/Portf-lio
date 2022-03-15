import React from 'react'
import { About, Footer, Header, Skills, Work, Contact } from './container';
import { NavBar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  )
}

export default App