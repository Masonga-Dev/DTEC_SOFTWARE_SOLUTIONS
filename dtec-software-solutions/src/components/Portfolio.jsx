import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  { name: 'Project Alpha', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', desc: 'A custom ERP solution for a logistics company.' },
  { name: 'Beta Mobile', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', desc: 'Mobile app for on-the-go business management.' },
  { name: 'Gamma Cloud', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80', desc: 'Cloud migration for a retail chain.' },
];

const Portfolio = () => (
  <section id="portfolio" style={{ background: '#f8f9fa', padding: '4rem 0' }}>
    <Container>
      <h2 className="fw-bold text-center mb-5" style={{ color: '#0A3D62' }}>Our Portfolio</h2>
      <Row>
        {projects.map((project, idx) => (
          <Col md={4} className="mb-4" key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={project.img} alt={project.name} />
              <Card.Body>
                <Card.Title className="fw-bold">{project.name}</Card.Title>
                <Card.Text>{project.desc}</Card.Text>
                <Button variant="outline-info" style={{ color: '#00B8D9', borderColor: '#00B8D9' }}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="info" className="text-white" style={{ background: '#00B8D9' }}>
          View All Projects
        </Button>
      </div>
    </Container>
  </section>
);

export default Portfolio;
