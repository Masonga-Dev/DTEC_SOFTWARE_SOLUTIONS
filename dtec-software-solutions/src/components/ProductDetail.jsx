import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { productBySlug } from '../data/products';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productBySlug.get(slug);

  if (!product) {
    return (
      <Container className="py-5">
        <h2 className="fw-bold" style={{ color: '#0A3D62' }}>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
        <Button as={Link} to="/products" variant="info" className="text-white" style={{ background: '#00B8D9' }}>
          Back to Products
        </Button>
      </Container>
    );
  }

  return (
    <section style={{ background: '#fff', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center g-4">
          <Col md={6}>
            <img src={product.img} alt={product.name} className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            <h1 className="fw-bold mb-3" style={{ color: '#0A3D62' }}>{product.name}</h1>
            <Badge bg="info" className="mb-3">Demo Available</Badge>
            <p className="mb-4">{product.desc}</p>
            <div className="d-flex gap-2">
              <Button
                as={product.demoUrl ? 'a' : undefined}
                href={product.demoUrl || undefined}
                target={product.demoUrl ? '_blank' : undefined}
                rel={product.demoUrl ? 'noopener noreferrer' : undefined}
                variant="info"
                className="text-white"
                style={{ background: '#00B8D9' }}
              >
                Launch Demo
              </Button>
              <Button as={Link} to="/contact" variant="outline-info" style={{ color: '#00B8D9', borderColor: '#00B8D9' }}>
                Contact Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetail;


