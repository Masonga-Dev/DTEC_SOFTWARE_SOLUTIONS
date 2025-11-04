import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
              <div className="tech-item"><div className="tech-icon">🅽</div><div className="tech-label">Node.js</div></div>
              <div className="tech-item"><div className="tech-icon">🐍</div><div className="tech-label">Python</div></div>
              <div className="tech-item"><div className="tech-icon">🟦</div><div className="tech-label">Laravel</div></div>
              <div className="tech-item"><div className="tech-icon">🐘</div><div className="tech-label">PostgreSQL</div></div>
              <div className="tech-item"><div className="tech-icon">🟠</div><div className="tech-label">MySQL</div></div>
              <div className="tech-item"><div className="tech-icon">🍃</div><div className="tech-label">MongoDB</div></div>
              <div className="tech-item"><div className="tech-icon">☁️</div><div className="tech-label">AWS</div></div>
              <div className="tech-item"><div className="tech-icon">🔷</div><div className="tech-label">Azure</div></div>
              <div className="tech-item"><div className="tech-icon">📱</div><div className="tech-label">Flutter</div></div>
              <div className="tech-item"><div className="tech-icon">📱</div><div className="tech-label">React Native</div></div>
              <div className="tech-item"><div className="tech-icon">🐳</div><div className="tech-label">Docker</div></div>
            </div>
            <div className="tech-notes">
              <p className="mb-1"><strong>Backend:</strong> PHP, Laravel, Python (Django/Flask), Node.js, Java</p>
              <p className="mb-1"><strong>Frontend:</strong> React, Angular, Vue.js, HTML5, CSS3, Bootstrap</p>
              <p className="mb-1"><strong>Mobile:</strong> Flutter, React Native, Kotlin, Swift</p>
              <p className="mb-1"><strong>Database:</strong> PostgreSQL, MySQL, MongoDB, MS SQL Server</p>
              <p className="mb-1"><strong>Cloud:</strong> AWS, Azure, Google Cloud, DigitalOcean</p>
            </div>
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
