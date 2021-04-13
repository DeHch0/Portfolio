import React from 'react';
import './style.css';

import Icon from '@mdi/react';
import { mdiBrain, mdiCodeBraces, mdiCodeGreaterThanOrEqual, mdiCodeTags, mdiCoffee, mdiFacebook, mdiStar } from '@mdi/js';

const Facts = () => {


    return (
        <div className="facts" id='facts'>

            <h3 className='facts-heading'>Facts</h3>

            <div className="fun-fact">
                <Icon path={mdiBrain} size={2} color='#15da8e'/>
                <p>Courses</p>
                <p>6</p>
            </div>

            <div className="fun-fact">
                <Icon path={mdiStar} size={2} color='#15da8e'/>
                <p>Certificates</p>
                <p>8</p>
            </div>

            <div className="fun-fact">
                <Icon path={mdiCodeTags} size={2} color='#15da8e'/>
                <p>Projects</p>
                <p>2</p>
            </div>

            <div className="fun-fact">
                <Icon path={mdiCoffee} size={2} color='#15da8e'/>
                <p>Cups of Coffee</p>
                <p>32</p>
            </div>

        </div>

    )
}
export default Facts;