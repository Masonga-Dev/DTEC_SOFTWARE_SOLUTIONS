import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { products as catalog } from '../data/products';

const products = catalog;

const Products = ({ sample = false }) => {
  const visibleProducts = sample ? products.slice(0, 3) : products;

  return (
    <section id="products" style={{ background: '#fff', padding: '0 0 4rem 0' }}>
      {!sample && (
        <div className="product-hero-section">
          <div className="hero-video-section">
            <video className="hero-video" autoPlay muted loop playsInline>
              <source src="/images/pro.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div className="hero-overlay" />
            <div className="hero-content">
              <h1 className="hero-title fw-bold">Our Products</h1>
              <p className="hero-desc">Explore our suite of reliable, scalable, and user-friendly products designed to streamline operations and accelerate digital transformation across industries.</p>
            </div>
          </div>
        </div>
      )}

      <Container>
        <h2 className="fw-bold text-center mb-2" style={{ color: '#0A3D62' }}>Our Products</h2>
        <p className="text-center mb-5" style={{ maxWidth: 900, margin: '0 auto' }}>
          Explore our suite of reliable, scalable, and user friendly products designed to streamline
          operations and accelerate digital transformation across industries.
        </p>
        <div className="products-list">
          {visibleProducts.map((product, idx) => {
            const reverse = idx % 2 === 1; // alternate
            return (
              <div className={`product-row d-flex align-items-center mb-5 flex-column flex-md-row ${reverse ? 'reverse' : ''}`} key={product.slug}>
                <div className="product-image col-12 col-md-6">
                  <img src={product.img} alt={product.name} className="img-fluid rounded product-hero-img" />
                </div>
                <div className="product-info col-12 col-md-6">
                  <h3 className="fw-bold">{product.name}</h3>
                  <p className="mb-4">{product.desc}</p>
                  <Button as={Link} to={`/products/${product.slug}`} variant="info" className="text-white product-cta" style={{ background: '#00B8D9' }}>
                    View Demo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        {sample && (
          <div className="text-center mt-3">
            <Button as={Link} to="/products" variant="info" className="text-white px-4" style={{ background: '#00B8D9' }}>
              View All Products
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Products;
