import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { products as catalog } from '../data/products';

const products = catalog;

const Products = ({ sample = false }) => {
  const visibleProducts = sample ? products.slice(0, 3) : products;

  return (
    <section id="products" style={{ background: '#fff', padding: '4rem 0' }}>
      <Container>
        <h2 className="fw-bold text-center mb-2" style={{ color: '#0A3D62' }}>Our Products</h2>
        <p className="text-center mb-5" style={{ maxWidth: 900, margin: '0 auto' }}>
          Explore our suite of reliable, scalable, and user-friendly products designed to streamline
          operations and accelerate digital transformation across industries.
        </p>
        <Row>
          {visibleProducts.map((product, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card className="h-100 shadow-sm product-card">
                <Card.Img variant="top" src={product.img} alt={product.name} />
                <Card.Body>
                  <Card.Title className="fw-bold d-flex align-items-center justify-content-between">
                    <span>{product.name}</span>
                    {product.demoUrl && (
                      <span className="badge bg-info text-white">Demo</span>
                    )}
                  </Card.Title>
                  <Card.Text>{product.desc}</Card.Text>
                  <Button as={Link} to={`/products/${product.slug}`} variant="info" className="text-white" style={{ background: '#00B8D9' }}>
                    View Demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
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
