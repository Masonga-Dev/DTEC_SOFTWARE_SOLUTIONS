import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <section id="contact" style={{ background: 'linear-gradient(90deg, #0A3D62 60%, #00B8D9 100%)', color: '#fff', padding: '4rem 0' }}>
    <Container>
      <Row>
        <Col md={6}>
          <h2 className="fw-bold mb-4">Contact Us</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type your message" />
            </Form.Group>
            <Button variant="light" type="submit" className="text-info fw-bold">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <h5>Rwanda Office</h5>
          <p>
            Kubaho Plaza, KG 7 Ave, KIGALI<br />
            Phone: +25078088777<br />
            Email: <a href="mailto:Deepak@dtec.co.in" className="text-white">Deepak@dtec.co.in</a><br />
            Email: <a href="mailto:Sales@dtec.rw" className="text-white">Sales@dtec.rw</a>
          </p>
          <h5 className="mt-4">India Office</h5>
          <p>
            Kurasseril Bunglavu, MahadeviKadu PO,<br />
            Karthikapally, Alappuzha, Kerala, INDIA.<br />
            Phone: +91 87 1473 1403<br />
            Email: <a href="mailto:Deepak@dtec.co.in" className="text-white">Deepak@dtec.co.in</a><br />
            Email: <a href="mailto:Sales@dtec.rw" className="text-white">Sales@dtec.rw</a>
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;
