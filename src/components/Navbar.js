import { IoHomeOutline } from "react-icons/io5";
import { GiCrossedSwords } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FiAlertCircle } from "react-icons/fi";
import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href=""><IoHomeOutline  /> Home </a>
      <a href=""><GiCrossedSwords /> Battles </a>
      <a href=""><IoPerson />Trainer Profile </a>
      <a href=""><HiMiniUserGroup />Community </a>
      <a href=""><FiAlertCircle /> About</a>
    </nav>
  )
}

export default Navbar
