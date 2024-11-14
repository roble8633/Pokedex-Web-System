import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main'; 
import About from './components/About';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:name" element={<PokemonDetail />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App