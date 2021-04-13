import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
const Header = () => {

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="list-items"><Link to='/'><span>Denis</span> <span>Rumenov</span></Link></li>
                <li className='list-items'><a href="#home">About me</a></li>
                <li className='list-items'><a href="#education">Resume</a></li>
                <li className='list-items'><a href="#facts">Facts</a></li>
                <li className='list-items'><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header;