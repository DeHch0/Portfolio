import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
const Header = () => {

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="list-items"><Link to='/'><span>Denis</span> <span>Rumenov</span></Link></li>
                <li className="list-items"><Link to='/'>About me</Link></li>
                <li className="list-items"><Link to='/resume'>Resume</Link></li>
                <li className="list-items"><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Header;