import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ClientShowcase.css';
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
          <div className="hero-two-col">
            <div className="hero-col hero-col-left">
              <HeroRotator isTitleOnly />
            </div>
            <div className="hero-col hero-col-right">
              <HeroRotator descOnly />
            </div>
          </div>
        </Container>
      </div>
      <Container className="py-5" style={{ maxWidth: 1100 }}>
        {/* About intro: keep About on the Home page only. Other page intros moved into their respective components. */}
        <div className="pages-section mb-4 pages-no-bg">
          <div className="row align-items-start">
            <div className="col-md-4 pages-title-col">
              <h2 className="pages-title fw-bold">About Us</h2>
              <div className="pages-underline" />
            </div>
            <div className="col-md-8 pages-desc-col">
              <p className="pages-desc mb-0">
                D-TEC Software Solutions Ltd is a multinational IT services and software development company specializing in designing, developing, and deploying customized digital solutions for government institutions, corporate enterprises, NGOs, and international development organizations across East Africa and India.
              </p>
            </div>
          </div>
        </div>
        <div className="who-we-are-section">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <img src="/images/about.jpeg" alt="About DTEC" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold mb-2">Who We Are</h4>
              <p className="mb-3">
                D-TEC Software Solutions Ltd is a multinational IT services and software development company with proven expertise serving government agencies, NGOs, and enterprises across Africa and India. Delivering innovative digital solutions that drive transformation and operational excellence.
              </p>
              <Button as={Link} to="/about" variant="info" className="text-white" style={{ background: '#00B8D9' }}>
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
        {/* Technology Stack - inserted on Home between Products and Contact */}
        <div className="tech-stack-section mt-4">
          <div className="tech-stack-inner">
            <h4 className="tech-stack-title">Technology Stack</h4>
            <div className="tech-grid">
              <div className="tech-item"><div className="tech-icon">⚛️</div><div className="tech-label">React</div></div>
              <div className="tech-item"><div className="tech-icon">�️</div><div className="tech-label">Angular</div></div>
              <div className="tech-item"><div className="tech-icon">🟩</div><div className="tech-label">Vue.js</div></div>
              <div className="tech-item"><div className="tech-icon">�🅽</div><div className="tech-label">Node.js</div></div>
              <div className="tech-item"><div className="tech-icon">☕️</div><div className="tech-label">Java</div></div>
              <div className="tech-item"><div className="tech-icon">🐍</div><div className="tech-label">Python</div></div>
              <div className="tech-item"><div className="tech-icon">🟦</div><div className="tech-label">Laravel</div></div>
              <div className="tech-item"><div className="tech-icon">🐘</div><div className="tech-label">PostgreSQL</div></div>
              <div className="tech-item"><div className="tech-icon">🟠</div><div className="tech-label">MySQL</div></div>
              <div className="tech-item"><div className="tech-icon">🍃</div><div className="tech-label">MongoDB</div></div>
              <div className="tech-item"><div className="tech-icon">☁️</div><div className="tech-label">AWS</div></div>
              <div className="tech-item"><div className="tech-icon">🔷</div><div className="tech-label">Azure</div></div>
              <div className="tech-item"><div className="tech-icon">🐬</div><div className="tech-label">DigitalOcean</div></div>
              <div className="tech-item"><div className="tech-icon">📱</div><div className="tech-label">Flutter</div></div>
              <div className="tech-item"><div className="tech-icon">📱</div><div className="tech-label">React Native</div></div>
              <div className="tech-item"><div className="tech-icon">🐳</div><div className="tech-label">Docker</div></div>
            </div>

            {/* Tech cards grid without icons */}
            <div className="tech-card-grid" role="list">
              <div className="tech-card" role="listitem">
                <div className="tech-card-title">Backend</div>
                <ul className="tech-card-list">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Laravel</li>
                  <li>Java</li>
                </ul>
              </div>
              <div className="tech-card" role="listitem">
                <div className="tech-card-title">Frontend</div>
                <ul className="tech-card-list">
                  <li>React</li>
                  <li>Angular</li>
                  <li>Vue.js</li>
                  <li>HTML5 / CSS3</li>
                </ul>
              </div>
              <div className="tech-card" role="listitem">
                <div className="tech-card-title">Mobile</div>
                <ul className="tech-card-list">
                  <li>Flutter</li>
                  <li>React Native</li>
                  <li>Kotlin</li>
                  <li>Swift</li>
                </ul>
              </div>
              <div className="tech-card" role="listitem">
                <div className="tech-card-title">Database</div>
                <ul className="tech-card-list">
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>MS SQL Server</li>
                </ul>
              </div>
              <div className="tech-card" role="listitem">
                <div className="tech-card-title">Cloud</div>
                <ul className="tech-card-list">
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Google Cloud</li>
                  <li>DigitalOcean</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </Container>

      {/* Client Showcase Section */}
      <div className="client-showcase-section mt-5">
        <h4 className="client-showcase-title">Our Clients</h4>
        <div className="client-carousel">
          <div className="client-card corporate">
            <img src="/images/bki.png" alt="BK Insurance" className="client-logo" />
            <h5 className="client-title">BK Insurance</h5>
            <p className="client-subtitle">Financial Technology Solutions</p>
          </div>
          <div className="client-card government">
            <img src="/images/rra.png" alt="RRA" className="client-logo" />
            <h5 className="client-title">Rwanda Revenue Authority</h5>
            <p className="client-subtitle">Services and Solutions for Government</p>
          </div>
          <div className="client-card ngo">
            <img src="/images/plan-international.png" alt="Plan International" className="client-logo" />
            <h5 className="client-title">Plan International</h5>
            <p className="client-subtitle">NGO Digital Transformation</p>
          </div>
          <div className="client-card government">
            <img src="/images/gov.png" alt="Supreme Court of Rwanda" className="client-logo" />
            <h5 className="client-title">Supreme Court of Rwanda</h5>
            <p className="client-subtitle">Judicial System Solutions</p>
          </div>
          <div className="client-card government">
            <img src="/images/NLA.png" alt="National Land Authority" className="client-logo" />
            <h5 className="client-title">National Land Authority</h5>
            <p className="client-subtitle">Land Management Systems</p>
          </div>
          <div className="client-card government">
            <img src="/images/Healthcare.jpg" alt="Healthcare Sector" className="client-logo" />
            <h5 className="client-title">Healthcare Sector</h5>
            <p className="client-subtitle">Health Management System and Hospital IT systems deployment and maintenance
</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// Rotating hero content component
const slides = [
  {
    // stair-step title: use newlines to create stepped lines
    title: 'D-TEC Software Solutions\nLtd',
    desc: 'A multinational IT services and software development company with proven expertise serving government agencies, NGOs, and enterprises across Africa and India. Delivering innovative digital solutions that drive transformation and operational excellence.',
    cta: { text: 'Discover More', to: '/about' }
  },
  {
    title: 'Software Development',
    desc: ' Custom enterprise and government software systems, portals, and management tools designed forscalability and security.',
    cta: { text: 'Explore Services', to: '/services' }
  },
  {
    title: 'Cloud & Hosting',
    desc: 'Secure hosting, backup, and cloud management services with enterprise-grade reliability andcompliance.',
    cta: { text: 'View Demo', to: '/products' }
  },
  {
    title: 'Web & CMS Solutions',
    desc: 'Responsive, multilingual, and SEO-optimized websites powered by leading content managementsystems.',
    cta: { text: 'Request Service', to: '/contact' }
  }
];

function HeroRotator({ isTitleOnly = false, descOnly = false }) {
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

  // split the title on newlines so we can render stair-step lines
  const titleLines = (typedTitle || slide.title).split('\n');

  return (
    <div className="hero-heading-wrap" key={index}>
      {!descOnly && (
        <h1 className="hero-title fw-bold">
          {titleLines.map((line, i) => (
            <span key={i} className={`hero-title-line hero-title-line-${i + 1}`}>
              {line}
            </span>
          ))}
        </h1>
      )}
      {!isTitleOnly && (
        <>
          <p className="hero-desc">{typedDesc}</p>
          <div className="hero-cta">
            <Link className="hero-cta-arrow" to={slide.cta.to} aria-label={slide.cta.text}>
              <img src="/images/arrow.png" className="arrow" alt="arrow" />
              <span className="hero-cta-label">{slide.cta.text}</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
