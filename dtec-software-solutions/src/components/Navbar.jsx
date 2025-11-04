import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';


const DTECNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hasHero, setHasHero] = useState(false);
  const [threshold, setThreshold] = useState(0);

  useEffect(() => {
    // detect hero presence and compute threshold
    const compute = () => {
      const hero = document.querySelector('.hero-video-section');
      const has = Boolean(hero);
      setHasHero(has);
      setThreshold(has ? Math.max(50, hero.offsetHeight) : 50);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      // when user has scrolled past the hero threshold, mark scrolled=true
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  // choose classes based on scroll state
  const navClass = `floating-navbar ${scrolled ? 'scrolled' : 'top'}`;
  // while the hero is visible, keep the navbar fixed-top overlaying the hero; after scrolling past, make it static (non-sticky)
  const positionClass = (!scrolled && hasHero) ? 'fixed-top' : 'static';

  return (
    <Navbar expand="lg" className={`${navClass} py-3 ${positionClass}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src="/images/logo.png" alt="D-TEC" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Nav.Link>
            <Nav.Link as={Link} to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Nav.Link>
            <Nav.Link as={Link} to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Nav.Link>
            <Button as={Link} to="/contact" variant={scrolled ? 'info' : 'light'} className={`ms-2 quote-btn ${scrolled ? 'scrolled' : ''}`}>
              Get a Quote
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DTECNavbar;
