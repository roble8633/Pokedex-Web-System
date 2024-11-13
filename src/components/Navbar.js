import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faComments, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <FontAwesomeIcon icon={faHome} />
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <FontAwesomeIcon icon={faUserFriends} />
                    <Link to="/profile">Personal Trainer</Link>
                </li>
                <li className="navbar-item">
                    <FontAwesomeIcon icon={faComments} />
                    <Link to="https://www.pokecommunity.com/">Community</Link>
                </li>
                <li className="navbar-item">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
