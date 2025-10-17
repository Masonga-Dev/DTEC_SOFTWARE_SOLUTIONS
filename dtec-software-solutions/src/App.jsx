
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DTECNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <DTECNavbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Services />
              <Products sample />
              <Portfolio />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
