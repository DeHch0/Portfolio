import React from 'react';
import './style.css';
const Contact = () => {

    return (

        <div className="contact-container" id='contact'>
            <h4 className='contact-heading'>Contact me</h4>

            <div className="contact-form">

                <form>
                    <h5 className='contact-help'>How Can I Help You :)</h5>
                    <div className="input-field">
                        <label htmlFor="full-name">Full Name:</label>
                        <input type="text" />
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email:</label>
                        <input type="text" />
                    </div>

                    <div className="input-field">
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" />
                    </div>

                    <div className="input-field">
                        <label htmlFor="message">Message:</label>
                        <textarea name='message' />
                    </div>

                    <button>Send</button>
                </form>
            </div>

            <div className="about-me">
                <h5>More info about me</h5>
                <p>Phone: xxxxx xxx xxx</p>
            </div>
        </div>
    )
}

export default Contact;