import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ProductMegaMenu from './ProductMegaMenu';


const DTECNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hasHero, setHasHero] = useState(false);
  const [threshold, setThreshold] = useState(0);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showWhyChooseUs, setShowWhyChooseUs] = useState(false);
  const menuRef = useRef(null);
  const whyChooseRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle clicks outside Why Choose D-TEC dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (whyChooseRef.current && !whyChooseRef.current.contains(event.target)) {
        setShowWhyChooseUs(false);
      }
    };

    if (showWhyChooseUs) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showWhyChooseUs]);

  // Handle mega menu visibility based on page and user interaction
  useEffect(() => {
    const handleVisibility = () => {
      // Keep menu open if we're on products page and the menu should stay open
      if (location.pathname === '/products' && location.state?.keepMenuOpen) {
        setShowMegaMenu(true);
      } else if (location.pathname !== '/products') {
        // Close menu when leaving products page
        setShowMegaMenu(false);
      }
    };

    handleVisibility();

    // Add scroll event listener to handle menu visibility
    const handleScroll = () => {
      if (showMegaMenu && window.scrollY > 100) {
        setShowMegaMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, location.state]);

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

  // Show mega menu when on products page
  useEffect(() => {
    if (location.pathname === '/products') {
      setShowMegaMenu(true);
    }
  }, [location.pathname]);

  // Handle clicks outside menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMegaMenu(false);
      }
    };

    if (showMegaMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMegaMenu]);

  return (
    <>
      <Navbar expand="lg" className={`${navClass} py-3 ${positionClass}`}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
            <img src="/images/logo.png" alt="D-TEC" className="nav-logo" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Nav.Link>
            <div 
              ref={menuRef}
              className={`nav-item mega-menu-container ${showMegaMenu ? 'show' : ''}`}
            >
              <Nav.Link 
                as={Link}
                to="/products"
                className={location.pathname === '/products' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setShowMegaMenu(!showMegaMenu);
                }}
              >
                Products
              </Nav.Link>
              <ProductMegaMenu 
                show={showMegaMenu} 
                onClose={() => {
                  clearTimeout(timeoutRef.current);
                  setShowMegaMenu(false);
                }}
                containerRef={menuRef}
              />
            </div>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Nav.Link>
            <div className="nav-item why-choose-container" ref={whyChooseRef}>
              <Nav.Link
                className={`dropdown-toggle ${showWhyChooseUs ? 'active' : ''}`}
                onClick={() => setShowWhyChooseUs(!showWhyChooseUs)}
              >
                Why Choose D-TEC
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* Why Choose D-TEC Dropdown */}
      <div className={`why-choose-dropdown ${showWhyChooseUs ? 'show' : ''}`}>
        <div className="why-choose-overlay" onClick={() => setShowWhyChooseUs(false)} />
        <div className="why-choose-content">
          <Container>
            <Row>
              <Col lg={4} className="why-choose-intro">
                <h3>Why Choose Us</h3>
                <p>Excellence in digital transformation through proven expertise and innovative solutions.</p>
                <div className="why-choose-accent" />
              </Col>
              <Col lg={8} className="why-choose-grid">
                <div className="why-choose-item">
                  <h5>Proven Track Record</h5>
                  <p>Demonstrated success with national-level government institutions and mission-critical systems across East Africa and India.</p>
                </div>
                <div className="why-choose-item">
                  <h5>Regional Expertise</h5>
                  <p>Deep understanding of African and Indian ICT ecosystems, regulatory environments, and development priorities.</p>
                </div>
                <div className="why-choose-item">
                  <h5>End-to-End Capabilities</h5>
                  <p>Complete service delivery from system design, development, integration, and deployment through ongoing support and maintenance.</p>
                </div>
                <div className="why-choose-item">
                  <h5>Security & Scalability</h5>
                  <p>Focus on security, usability, and scalable architecture to protect your investments and support organizational growth.</p>
                </div>
                <div className="why-choose-item">
                  <h5>Dedicated Multinational Team</h5>
                  <p>Expert developers, analysts, and consultants committed to understanding your organization's unique challenges and delivering solutions that matter.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Navbar>
      <ProductMegaMenu show={showMegaMenu} onClose={() => setShowMegaMenu(false)} />
    </>
  );
};

export default DTECNavbar;
