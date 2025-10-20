import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const slideStyles = {
  slide: {
    position: 'relative',
    minHeight: '70vh',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  bg: (url) => ({
    position: 'absolute',
    inset: 0,
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.6)',
  }),
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.70)',
  },
  contentWrap: {
    position: 'relative',
    zIndex: 2,
    paddingTop: '3rem',
    paddingBottom: '3rem',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Poppins, Montserrat, Arial, sans-serif',
    fontWeight: 700,
  },
  desc: {
    fontSize: '1.1rem',
    maxWidth: 760,
  },
};

const Home = () => {
  return (
    <section id="home">
      <div className="hero-video-section">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/images/hero.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="hero-overlay" />
        <Container className="hero-content">
          <HeroRotator />
        </Container>
      </div>
      <Container className="py-5" style={{ maxWidth: 1100 }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2">About Us</h2>
          <p className="mb-4" style={{ fontSize: '1.05rem' }}>
            we are technology driven company dedicated to building intelligent software systems,
            empowering Business to transform, grow, and inovate in the digital world
          </p>
        </div>
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img src="/images/about.jpeg" alt="About DTEC" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold mb-2">Who We Are</h4>
            <p className="mb-3">
              DTEC Software Solutions is dedicated to delivering innovative, reliable, and scalable software products
              and services. Our mission is to empower businesses with technology that drives growth and efficiency.
            </p>
            <Button as={Link} to="/about" variant="info" className="text-white" style={{ background: '#00B8D9' }}>
              Learn More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;

// Rotating hero content component
const slides = [
  {
    title: 'DTEC SOFTWARE SOLUTIONS LTD',
    desc: 'Empowering businesses through innovative software development, maintenance, and digital transformation services.',
    cta: { text: 'Discover More', to: '/about' }
  },
  {
    title: 'Custom Software Solutions',
    desc: 'From enterprise systems to web and mobile applications — we design and build software that transforms businesses.',
    cta: { text: 'Explore Services', to: '/services' }
  },
  {
    title: 'Cloud Migration for Enterprises',
    desc: 'Transition smoothly to secure, scalable, and cost-effective cloud platforms with DTEC’s Gamma Cloud services.',
    cta: { text: 'View Demo', to: '/products' }
  },
  {
    title: 'Reliable Maintenance & Support',
    desc: 'Keep your business running without interruption with DTEC’s expert IT maintenance and support services.',
    cta: { text: 'Request Service', to: '/contact' }
  }
];

function HeroRotator() {
  const [index, setIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState('');
  const [typedDesc, setTypedDesc] = useState('');

  useEffect(() => {
    // no fixed interval; advancement is scheduled after typing completes
    return () => {};
  }, []);

  // typing effect when slide changes
  useEffect(() => {
    const slide = slides[index];
    setTypedTitle('');
    setTypedDesc('');

    let t = 0;
    let d = 0;
    const title = slide.title;
    const desc = slide.desc;

    const titleSpeed = 80; // slower typing for title (ms per char)
    const descSpeed = 40; // slower typing for description

    const titleInterval = setInterval(() => {
      t += 1;
      setTypedTitle(title.slice(0, t));
      if (t >= title.length) clearInterval(titleInterval);
    }, titleSpeed);

    // start typing description after title has started (stagger)
    const descStart = Math.min(1200, title.length * titleSpeed + 200);
    let descInterval = null;
    const descTimeout = setTimeout(() => {
      descInterval = setInterval(() => {
        d += 1;
        setTypedDesc(desc.slice(0, d));
        if (d >= desc.length && descInterval) {
          clearInterval(descInterval);
          descInterval = null;
        }
      }, descSpeed);
    }, descStart);

    // schedule auto-advance after typing completes + extra pause
  const estimatedTyping = title.length * titleSpeed + descStart + desc.length * descSpeed;
  const extraPause = 3000; // wait 3s after typing finishes before advancing
    const advanceDelay = Math.min(estimatedTyping + extraPause, 10000); // cap at 10s
    const advanceTimeout = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, advanceDelay);

    return () => {
      clearInterval(titleInterval);
      clearTimeout(descTimeout);
      if (descInterval) clearInterval(descInterval);
      clearTimeout(advanceTimeout);
    };
  }, [index]);

  const slide = slides[index];

  return (
    <div className="hero-heading-wrap" key={index}>
      <h1 className="hero-title fw-bold">{typedTitle}</h1>
      <p className="hero-desc">{typedDesc}</p>
      <div className="hero-cta">
        <Link className="hero-cta-arrow" to={slide.cta.to} aria-label={slide.cta.text}>
          <img src="/images/arrow.png" className="arrow" alt="arrow" />
          <span className="hero-cta-label">{slide.cta.text}</span>
        </Link>
      </div>
    </div>
  );
}
