import logo from "../img/LOGO_ILLUMISELF.avif";
import room from "../img/room_picture.avif";
import outside from "../img/outside_picture.avif";

import FeatherIcon from "feather-icons-react";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-logo">
                <img src={logo} alt="Illumiself" className="hero-logo-img" />
            </div>


            <div className="hero-images">
                <div className="hero-card">
                    <img src={room} alt="" />
                    <div className="hero-text hero-text-highlight">
                        <p>Conheça nossa Loja</p>
                        <h2>Atendimento Exclusivo</h2>
                        <span>Preço e Qualidade</span>
                    </div>
                </div>

                <div className="hero-card">
                    <img src={outside} alt="" />
                </div>
            </div>
            

            <div className="hero-portal">
                <a href="#portal" className="portal-btn">
                    Illumiself Portal
                    <p style={{ fontSize: "12px" }}>Em construção</p>
                </a>
            </div>

        </section>
    );
}