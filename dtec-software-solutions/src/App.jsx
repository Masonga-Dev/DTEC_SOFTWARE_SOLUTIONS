
import DTECNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <DTECNavbar />
      <main>
        <Home />
        <About />
        <Services />
        <Products />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
