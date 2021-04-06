import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiAccount, mdiGithub, mdiLinkedin, mdiFacebook } from '@mdi/js';

const Home = () => {

    return (
        <div className="main">
            <div className="left-side">
                <img src={process.env.PUBLIC_URL + 'snn.jpg'} alt=""/>
            
            </div>

            <div className="right-side">
                <h3>Javascript Web Developer</h3>
                <h1>Denis Rumenov</h1>
                <p>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
                <Link target='_blank' to={{pathname: 'https://www.facebook.com/denis.rumenov.96'}}><button className='button-social'><Icon path={mdiFacebook}size={1}/></button></Link>
                <Link target='_blank' to={{pathname: 'https://linkedin.com/in/denis-rumenov-2693941ab'}}><button className='button-social'><Icon path={mdiLinkedin}size={1}/></button></Link>
                <Link to='/contact'><button className='button-contact'>Contact</button></Link>
                <Link target='_blank' to={{pathname: 'https://github.com/DeHch0'}} ><button className='button-social'><Icon path={mdiGithub}size={1}/></button></Link>
                <Link to='/contact'><button className='button-social'><Icon path={mdiAccount}size={1}/></button></Link>
            </div>
        </div>
    )
}

export default Home;