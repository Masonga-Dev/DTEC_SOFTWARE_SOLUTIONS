import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight, FaTimes } from 'react-icons/fa';

const productCategories = [
  {
    id: 'enterprise',
    title: 'Enterprise & Business Solutions',
    path: '/products#enterprise',
    implemented: true,
  },
  {
    id: 'government',
    title: 'Government & Institutional Systems',
    path: '/products#government',
    implemented: true,
  },
  {
    id: 'corporate',
    title: 'Corporate & NGO Digital Solutions',
    path: '/products#corporate',
    implemented: true,
  },
  {
    id: 'health',
    title: 'Health & Education Systems',
    path: '/products#health',
    implemented: true,
  },
  {
    id: 'web',
    title: 'Web, Mobile & Cloud Solutions',
    path: '/products#web',
    implemented: true,
  },
  {
    id: 'emerging',
    title: 'Emerging Tech & Add-Ons',
    path: '/products#emerging',
    implemented: true,
  },
];

const ProductMegaMenu = ({ show, onClose, containerRef }) => {
  const navigate = useNavigate();
  const isScrolling = useRef(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleCategoryClick = async (category) => {
    const currentPath = window.location.pathname;
    const isMobile = window.innerWidth <= 991;

    // Prevent multiple clicks while scrolling
    if (isScrolling.current) return;
    isScrolling.current = true;

    // Function to scroll to section
    const scrollToSection = (sectionId) => {
      return new Promise((resolve) => {
        let attempts = 0;
        const maxAttempts = 50; // 5 seconds maximum
        
        const tryScroll = () => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerOffset = isMobile ? 60 : 80;
            
            // Update URL hash without triggering browser's scroll
            window.history.pushState(null, '', `#${sectionId}`);
            
            requestAnimationFrame(() => {
              const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementTop - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });

              setTimeout(() => {
                isScrolling.current = false;
                resolve();
              }, 500);
            });
          } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(tryScroll, 100);
          } else {
            isScrolling.current = false;
            resolve();
          }
        };

        tryScroll();
      });
    };

    // Function to close menu smoothly
    const closeMenuSmooth = () => {
      setIsClosing(true);
      setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    };

    try {
      if (currentPath === '/products') {
        // If already on products page, just scroll and update URL manually
        window.history.pushState(null, '', `#${category.id}`);
        closeMenuSmooth();
        await scrollToSection(category.id);
      } else {
        // Navigate to products page first
        navigate(category.path, { 
          state: { 
            scrollToSection: category.id,
            keepMenuOpen: false
          }
        });

        // Wait for navigation and then scroll
        setTimeout(async () => {
          await scrollToSection(category.id);
          closeMenuSmooth();
        }, 500);
      }
    } catch (error) {
      console.error('Navigation error:', error);
      isScrolling.current = false;
      closeMenuSmooth();
    }
  };

  return (
    <div 
      className={`mega-menu-wrapper ${show ? 'show' : ''} ${isClosing ? 'closing' : ''}`}
      onClick={(e) => {
        // Close if clicking the overlay (wrapper) but not the menu itself
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="mega-menu-overlay"
        style={{
          opacity: show ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      <div 
        className="mega-menu"
        style={{
          position: 'sticky',
          top: '80px',
          transform: `translateY(${show ? '0' : '-10px'}) scale(${show ? '1' : '0.98'})`,
          opacity: show ? 1 : 0,
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
          visibility: show ? 'visible' : 'hidden'
        }}
      >
        <button 
          className="close-button" 
          onClick={(e) => {
            e.stopPropagation();
            setIsClosing(true);
            setTimeout(onClose, 300);
          }} 
          aria-label="Close menu"
        >
          <FaTimes size={18} />
        </button>
        <Container>
          <Row className="mega-menu-content">
            <Col lg={4} className="mega-menu-intro">
              <p className="mega-menu-desc">
                Explore our specialized platforms and digital ecosystems, built to transform industries and empower organizations worldwide.
              </p>
              <div className="mega-menu-accent" />
            </Col>
            <Col lg={8} className="mega-menu-categories">
              <div className="category-grid">
                {productCategories.map((category, index) => (
                  <button
                    key={category.id}
                    className="category-item"
                    onClick={() => handleCategoryClick(category)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      opacity: show ? 1 : 0,
                      transform: show ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
                    }}
                  >
                    <span className="category-title">
                      {category.title}
                    </span>
                    <FaChevronRight className="category-arrow" />
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductMegaMenu;