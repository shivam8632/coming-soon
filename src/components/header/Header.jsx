import React, { useState, useEffect } from 'react';
import './header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = 'navbar';
  if (scrolled) {
    navbarClasses += ' scrolled';
  }

  return (
    <Navbar className={navbarClasses} expand="md" data-bs-theme="dark" sticky="top">
      <Container className="d-flex justify-content-between">
        <Link to="/" className="text-white fs-2" style={{width: 'fit-content'}}>Logo</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{width: 'fit-content'}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/register" className="text-white">Register Now</Link>
            <Link to="/register" className="text-white">Sign In</Link>
            <Link to="/features" className="text-white">About Us</Link>
            <Link to="/pricing" className="text-white">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
