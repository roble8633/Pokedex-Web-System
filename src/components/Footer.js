// src/Footer.js
import React from 'react';
import './whole.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadset, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h1 className="footer-title">Pokédex</h1>
                <div className="footer-compressed">
                    <div className="footer-section">
                        <h3 className="footer-heading">Socials</h3>
                        <ul className="footer-links">
                            <li><Link to="https://www.facebook.com/kyzhua.roble"><FontAwesomeIcon icon={faFacebook} />Facebook</Link></li>
                            <li><Link to="https://www.pokecommunity.com/"><FontAwesomeIcon icon={faDiscord} />Community</Link></li>
                            <li><Link to="https://www.instagram.com/marloudalapag/profilecard/?igsh=MWZhOHo2amw0amlmMw=="><FontAwesomeIcon icon={faInstagram} />Instagram</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-heading">Contact</h3>
                        <ul className="footer-links">
                            <li><Link to=""><FontAwesomeIcon icon={faEnvelope} />pokemon@litzkypr.com</Link></li>
                            <li><Link to="https://support.pokemon.com/hc/en-us"><FontAwesomeIcon icon={faHeadset} /> Support</Link></li>
                            <li><Link to="https://niantic.helpshift.com/hc/en/6-pokemon-go/contact-us/?contact=1"><FontAwesomeIcon icon={faCommentDots} /> Feedback</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-heading">About</h3>
                        <p className="footer-about">
                            The Pokédex is a digital encyclopedia of Pokémon, providing information on their biology, abilities, and behavior.
                            Learn more about the world of Pokémon, including their habitats, types, and the trainers who catch them.
                        </p>
                    </div>    
                </div>
            </div>
            
            <p className="footer-copy">&copy; {new Date().getFullYear()} Pokédex. All rights reserved.</p>
        </footer>
    );
};

export default Footer;