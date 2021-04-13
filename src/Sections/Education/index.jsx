import React from 'react'; 
import './style.css';
const Education = () => {


    return (
        <div className="skills" id='education'>

            <div className="skills-style">
                <h4>Education</h4>
                
                <div className='skill-set'>
                    <div className='skill-period'>2018 - 2019 <span className="university">Software University (SoftUni.bg)</span> </div>
                    <h5 className="faculty">Javascript Developer Program</h5>
                    <div className="acquired-skills"><ul>
                        <span className='courses'>Courses:</span>
                        <li>PHP Fundamentals</li>
                        <li>JS Advanced</li>
                        <li>HTML {'&'} CSS Basics</li>
                        <li>JS Front End</li>
                        <li>JS Back End</li>
                        <li>ReactJS</li>
                    </ul></div>
                </div>

                <div className='skill-set'>
                    <div className='skill-period'>2017 - now <span className="university">National Sports Academy</span></div>
                    <h5 className="faculty">Swimming Coach</h5>
                    <p className="acquired-skills">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus repellat nesciunt?</p>
                </div>

                <div className='skill-set'>
                    <div className='skill-period'>2017 - now <span className="university">National Sports Academy</span></div>
                    <h5 className="faculty">Physical Education Teacher</h5>
                    <p className="acquired-skills">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus repellat nesciunt?</p>
                </div>
            </div>



            <div className="skills-style">
                <h4>Work Experience</h4>

                <div className='skill-set'>
                    <span className='skill-period'>-/-</span>
                    <span className="university">N/A</span>
                    <h5 className="faculty">N/A</h5>
                    <p className="acquired-skills">N/A</p>
                </div>
            </div>
        </div>
    )
}

export default Education;