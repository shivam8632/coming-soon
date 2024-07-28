import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SecondaryButton from '../../../components/buttons/Buttons';

function Contact() {
  return (
    <div className='contact'>
        <Container>
            <h2 className='text-white text-center' style={{marginBottom: 60}}>CONTACT US</h2>
            <div className="contact-form-info">
                <div className="contact-info">
                    <h2>GET IN TOUCH</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
                    <div className="contact-info-icons">
                        <div className="d-flex">
                            <span>
                                <FontAwesomeIcon icon={faCrosshairs} />
                            </span>
                            <p>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</p>
                        </div>
                        
                        <div className="d-flex">
                            <span>
                                <FontAwesomeIcon icon={faPhoneVolume} />
                            </span>
                            <a href="tel:+1234567895">1234567895</a>
                        </div>
                        
                        <div className="d-flex">
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <a href="mailto:info@example.com">info@example.com</a>
                        </div>
                    </div>
                    <div className="contact-info-follow">
                        <h6>Social Follow</h6>
                        <ul className="icons">
                            <li>
                                <Link><FontAwesomeIcon icon={faFacebookF} /></Link>
                            </li>
                            <li>
                                <Link><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                            </li>
                            <li>
                                <Link><FontAwesomeIcon icon={faTwitter} /></Link>
                            </li>
                            <li>
                                <Link><FontAwesomeIcon icon={faInstagram} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="contact-form">
                    <form action="">
                        <div className="input-container">
                            <input type="text" placeholder='Full Name' />
                        </div>
                        <div className="input-container">
                            <input type="email"  placeholder='Email' />
                        </div>
                        <div className="input-container">
                            <input type="number"  placeholder='Phone Number' />
                        </div>
                        <div className="input-container">
                            <textarea  placeholder='Message'></textarea>
                        </div>
                        <SecondaryButton buttonText='Send Message' />
                    </form>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Contact
