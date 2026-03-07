import Hero from "./sections/Hero";
import WhatsNew from "./sections/WhatsNew";
import ProjectManagement from "./sections/ProjectManagement";
import ProductFormulation from "./sections/ProductFormulation";
import QuotingSystem from "./sections/QuotingSystem";
import Consulting from "./sections/Consulting";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./style.css";

function App() {
  return (
    <div>

      <nav className="navbar">
        <div className="nav-inner">
          <div className="logo">Le3eD</div>
          <div className="nav-links">
            <a href="#whatsnew">Ai 4 Signs</a>
            <a href="#product">Product Formulation</a>
            <a href="#quoting">Quoting System</a>
            <a href="#project">Project Management</a>
            <a href="#consulting">Consulting</a>
          </div>
        </div>
      </nav>

      <Hero />

      <section id="whatsnew" className="section">
        <WhatsNew />
      </section>

      <section id="product" className="section section-alt">
        <ProductFormulation />
      </section>

      <section id="quoting" className="section">
        <QuotingSystem />
      </section>

      <section id="project" className="section section-alt">
        <ProjectManagement />
      </section>

      <section id="consulting" className="section">
        <Consulting />
      </section>

      <section id="contact" className="section section-alt">
        <Contact />
      </section>

      <Footer />

    </div>
  );
}

export default App;