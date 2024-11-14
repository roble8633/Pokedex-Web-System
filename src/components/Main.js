import React from 'react'
import Navbar from './Navbar'
import Dialog from './Dialog'
import Ash from './ash.png'
import { Link } from 'react-router-dom'
import './Main.css'

const Main = () => {
  return (
    <div className="img-bk">
        <Navbar/> 
        <h1 className="main-hd">Welcome to Pokémon!</h1>
        <img src={Ash} alt="Ash" className='centered-image' />
        <Dialog />
        <Link to="/pokedex" className="link">View Pokedex</Link>
    </div>
    
  )
}

export default Main
