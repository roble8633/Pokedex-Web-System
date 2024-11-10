import { SiPokemon } from "react-icons/si";
import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
        <SiPokemon className={styles.navbar} size={180}/>    
    </header>
  )
}

export default Header
