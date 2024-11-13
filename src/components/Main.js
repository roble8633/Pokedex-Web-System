import React from 'react'
import Navbar from './Navbar'
import Ash from './ash.png'
import { Link } from 'react-router-dom'
import './Main.css'

const Main = () => {
  return (
    <div className="img-bk">
        <Navbar/> 
        <h1>Pokedex</h1>
        <img src={Ash} alt="Ash" className='centered-image' />
        <Link to="/pokedex" className="link">View Pokedex</Link>
    </div>
    
  )
}

export default Main
