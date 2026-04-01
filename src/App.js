import { useState } from "react";
import Hero from "./sections/Hero";
import Benefits from "./sections/Benefits";
import Products from "./sections/Products";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import logo from "./img/Illumiself_logo_text.png";
import productsImg from "./img/product_pictures.png";
import FeatherIcon from "feather-icons-react";
import "./style.css";

function App() {

  const [modalType, setModalType] = useState(null);

  const closeModal = () => setModalType(null);

  const renderModalContent = () => {
    switch (modalType) {

      case "products":
        return (
          <>
            <h2 style={{ fontSize: "34px", marginBottom: "30px" }}>Products</h2>
            <img
              src={productsImg}
              alt="Produtos"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </>
        );

      case "contact":
        return (
          <>
            <h2>Contato</h2>
            <p>📧 illumiself@gmail.com</p>
            <p>📞 (51) 99860-3836</p>
            <p>📍 Av. Assis Brasil 7341</p>
          </>
        );

      case "terms":
        return (
          <>
            <h2>Termos e Condições</h2>
            <br></br><br></br><br></br>

            <p>
              Ao utilizar os produtos da Illumiself, o cliente concorda com as condições descritas abaixo:
            </p>
            <br></br>

            <p>
              Todos os produtos possuem garantia contra defeitos de fabricação, conforme as normas vigentes.
            </p>
            <br></br>
            <p>
              Os prazos de entrega podem variar de acordo com a disponibilidade dos itens e região de envio.
            </p>
            <br></br>
            <p>
              Recomendamos que a instalação dos produtos seja realizada por um profissional qualificado,
              garantindo segurança e melhor desempenho dos materiais.
            </p>
            <br></br>
            <p>
              A Illumiself não se responsabiliza por danos causados por instalação inadequada ou uso incorreto dos produtos.
            </p>
            <br></br><br></br><br></br>
            <p>
              Em caso de dúvidas, nossa equipe está disponível para prestar todo o suporte necessário.
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div id="top">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">

          <div className="logo" style={{cursor:"pointer"}}>
            <div onClick={() => document.getElementById("top").scrollIntoView({ behavior: "smooth" })}>
              <img src={logo} alt="Illumiself" className="nav-logo" />
            </div>
          </div>

          <div className="nav-links">
            <a onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}>
              Produtos
            </a>
            <a onClick={() => document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" })}>
              Depoimentos
            </a>
            <a onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
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
            Em breve você poderá solicitar cotações diretamente pelo site,
            de forma rápida, prática e personalizada.
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
            {renderModalContent()}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer openModal={setModalType} />

      <div
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FeatherIcon icon="arrow-up" />
      </div>

    </div>
  );
}

export default App;