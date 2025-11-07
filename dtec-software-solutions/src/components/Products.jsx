import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { productCategories } from '../data/productCategories';

const ProductSection = ({ category }) => {
  const { title, description, products } = category;

  return (
    <div id={category.id} className="product-category-section">
      <Container>
        <div className="category-header mb-5">
          <h2 className="category-title">
            <span className="line-1">{title}</span>
          </h2>
          <p className="category-desc">{description}</p>
        </div>

        <div className="products-list">
          {products.map((product, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div className={`product-row mb-5 ${reverse ? 'reverse' : ''}`} key={product.name}>
                <div className="product-info">
                  <h3 className="fw-bold">{product.name}</h3>
                  {product.subtitle && (
                    <h4 className="product-subtitle">{product.subtitle}</h4>
                  )}
                  <p className="mb-4">{product.description}</p>
                  <Button 
                    as={Link} 
                    to={`/contact?product=${encodeURIComponent(product.name)}`} 
                    variant="info" 
                    className="text-white product-cta" 
                    style={{ background: '#00B8D9' }}
                  >
                    Request Demo
                  </Button>
                </div>
                <div className="product-image">
                  <img 
                    src={product.img || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'}
                    alt={product.name}
                    className="img-fluid rounded product-hero-img"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const Products = ({ sample = false }) => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = (sectionId) => {
      return new Promise((resolve) => {
        let attempts = 0;
        const maxAttempts = 50; // 5 seconds maximum
        
        const tryScroll = () => {
          const element = document.getElementById(sectionId);
          if (element) {
            const isMobile = window.innerWidth <= 991;
            const headerOffset = isMobile ? 60 : 80;
            
            // Update URL hash without triggering a scroll
            window.history.pushState(null, '', `#${sectionId}`);
            
            requestAnimationFrame(() => {
              const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementTop - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });

              resolve();
            });
          } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(tryScroll, 100);
          } else {
            resolve();
          }
        };

        tryScroll();
      });
    };

    // Handler for both hash and state-based navigation
    const handleNavigation = async () => {
      // Get section ID from hash or state
      const sectionId = location.hash 
        ? location.hash.slice(1) 
        : location.state?.scrollToSection;

      if (sectionId) {
        // Always scroll regardless of current route
        await scrollToSection(sectionId);
      }
    };

    // Run navigation handler
    handleNavigation();

    // Set up hash change listener
    const handleHashChange = () => {
      const newSectionId = window.location.hash.slice(1);
      if (newSectionId) {
        scrollToSection(newSectionId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location.hash, location.state?.scrollToSection]);

  if (sample) {
    // Show sample products on home page
    const featuredProducts = productCategories.enterprise.products.slice(0, 3);
    return (
      <section id="products" style={{ background: '#000', padding: '0 0 4rem 0' }}>
        <Container>
          <div className="products-list">
            {featuredProducts.map((product, idx) => {
              const reverse = idx % 2 === 1;
              return (
                <div className={`product-row mb-5 ${reverse ? 'reverse' : ''}`} key={product.name}>
                  <div className="product-image">
                    <img 
                      src={product.img}
                      alt={product.name}
                      className="img-fluid rounded product-hero-img"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="fw-bold">{product.name}</h3>
                    {product.subtitle && (
                      <h4 className="product-subtitle">{product.subtitle}</h4>
                    )}
                    <p className="mb-4">{product.description}</p>
                    <Button 
                      as={Link} 
                      to={`/contact?product=${encodeURIComponent(product.name)}`}
                      variant="info" 
                      className="text-white product-cta" 
                      style={{ background: '#00B8D9' }}
                    >
                      Request Demo
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-3">
            <Button as={Link} to="/products" variant="info" className="text-white px-4" style={{ background: '#00B8D9' }}>
              View All Products
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <div className="products-page">
      <div className="product-hero-section">
        <div className="hero-video-section">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/images/pro.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="hero-overlay" />
          <Container className="hero-content text-center">
            <h1 className="hero-title fw-bold">
              <span className="line-1">Our</span>
              <span className="line-2">Products</span>
            </h1>
            <p className="hero-desc">
              Explore our suite of reliable, scalable, and user friendly products designed to streamline operations and accelerate digital transformation across industries.
            </p>
          </Container>
        </div>
      </div>

      <div className="products-container">
        {Object.values(productCategories).map((category) => (
          <ProductSection key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Products;