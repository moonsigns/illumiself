import { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Products from "./sections/Products";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import Drawer from "./components/Drawer";

import logo from "./img/LOGO ILLUMISELF.png";
import productsImg from "./img/product_pictures.png";

import FeatherIcon from "feather-icons-react";
import "./style.css";

function App() {

  const [modalType, setModalType] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeModal = () => setModalType(null);

  // lock scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "auto";
  }, [isDrawerOpen]);

  const modalContent = {
    products: (
      <>
        <h2 style={{ fontSize: "34px", marginBottom: "30px" }}>Products</h2>
        <img
          src={productsImg}
          alt="Produtos"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </>
    ),
    contact: (
      <>
        <h2>Contato</h2>
        <p>📧 illumiself@gmail.com</p>
        <p>📞 (51) 99860-3836</p>
        <p>📍 Av. Assis Brasil 7341</p>
      </>
    ),
    terms: (
      <>
        <h2>Termos e Condições</h2>
        <br /><br />
        <p>
          Ao utilizar os produtos da Illumiself, o cliente concorda com as condições descritas abaixo:
        </p>
        <br />
        <p>
          Todos os produtos possuem garantia contra defeitos de fabricação, conforme as normas vigentes.
        </p>
        <br />
        <p>
          Os prazos de entrega podem variar de acordo com a disponibilidade dos itens e região de envio.
        </p>
        <br />
        <p>
          Recomendamos que a instalação dos produtos seja realizada por um profissional qualificado.
        </p>
        <br />
        <p>
          A Illumiself não se responsabiliza por danos causados por instalação inadequada.
        </p>
      </>
    )
  };

  return (
    <div id="top">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">

          {/* LEFT SIDE (☰ + LOGO together) */}
          <div className="nav-left">

            {/* MENU ICON */}
            <div
              className="menu-icon"
              onClick={() => setIsDrawerOpen(true)}
              style={{ cursor: "pointer", fontSize: "40px", color: "#ffd000" }}
            >
              ☰
            </div>

            {/* LOGO */}
            <div
              className="logo"
              style={{ cursor: "pointer" }}
              onClick={() =>
                document.getElementById("top").scrollIntoView({ behavior: "smooth" })
              }
            >
              <img src={logo} alt="Illumiself" className="nav-logo" />
            </div>

          </div>

          {/* RIGHT SIDE LINKS */}
          <div className="nav-links">

            <a
              onClick={() =>
                document.getElementById("products").scrollIntoView({ behavior: "smooth" })
              }
            >
              Produtos
            </a>

            <a
              onClick={() =>
                document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" })
              }
            >
              Depoimentos
            </a>

            <a
              onClick={() =>
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }
            >
              Contato
            </a>

          </div>

        </div>
      </nav>

      <Hero />

      <section id="benefits" className="section">
        <Benefits />
      </section>

      <section id="products" className="section section-alt">
        <Products />
      </section>

      <section id="testimonials" className="section">
        <Testimonials />
      </section>

      <section id="contact" className="section section-alt">
        <CTA />
      </section>

      {/* PORTAL */}
      <section id="portal" className="portal-section">
        <div className="portal-content">
          <h1 className="portal-title">Portal Illumiself</h1>
          <p className="portal-subtitle">
            Estamos finalizando essa área para oferecer uma experiência ainda melhor.
          </p>
          <p className="portal-description">
            Em breve você poderá solicitar cotações diretamente pelo site.
          </p>
          <div className="portal-contact">
            <p>📧 illumiself@gmail.com</p>
            <p>📞 (51) 99860-3836</p>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalType && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>✕</span>
            {modalContent[modalType]}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer openModal={setModalType} />

      {/* SCROLL TOP */}
      <div
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FeatherIcon icon="arrow-up" />
      </div>

      {/* ✅ DRAWER (LEFT MENU) */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

    </div>
  );
}

export default App;