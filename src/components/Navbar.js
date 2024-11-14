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
                    <Link to="https://www.twitch.tv/pokemontcg">Watch Pokemon Tournament - "Twitch"</Link>
                </li>
                <li className="navbar-item">
                    <FontAwesomeIcon icon={faComments} />
                    <Link to="https://community.pokemon.com/en-us/discussions">Discussions</Link>
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
