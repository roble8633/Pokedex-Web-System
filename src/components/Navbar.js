import { IoHomeOutline } from "react-icons/io5";
import { GiCrossedSwords } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FiAlertCircle } from "react-icons/fi";
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <a href="/"><IoHomeOutline className="icon" /> Home </a>
      <a href=""><GiCrossedSwords className="icon"/> Battles </a>
      <a href=""><IoPerson className="icon"/>Trainer Profile </a>
      <a href=""><HiMiniUserGroup className="icon"/>Community </a>
      <a href=""><FiAlertCircle className="icon"/> About</a>
    </nav>
  )
}

export default Navbar
