import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
  { name: 'DTEC CRM', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', desc: 'Customer Relationship Management tool for growing businesses.' },
  { name: 'DTEC HRM', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80', desc: 'Human Resource Management solution for modern teams.' },
  { name: 'DTEC Analytics', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', desc: 'Business analytics platform for actionable insights.' },
];

const Products = () => (
  <section id="products" style={{ background: '#fff', padding: '4rem 0' }}>
    <Container>
      <h2 className="fw-bold text-center mb-5" style={{ color: '#0A3D62' }}>Our Products</h2>
      <Row>
        {products.map((product, idx) => (
          <Col md={4} className="mb-4" key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.img} alt={product.name} />
              <Card.Body>
                <Card.Title className="fw-bold">{product.name}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <Button variant="info" className="text-white" style={{ background: '#00B8D9' }}>
                  View Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Products;
