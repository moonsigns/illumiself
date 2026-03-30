import room from "../img/room_picture.avif";
import FeatherIcon from "feather-icons-react";

export default function Consulting() {
    return (
        <div className="cta">

            <div className="cta-left">
                <h2>Fale com nossos especialistas</h2>
                <span style={{ color: "#555", fontSize: "13px" }}>Estamos prontos para te ajudar a encontrar a melhor solução em iluminação.</span>
                <div className="contact-info">

                    <div>
                        <FeatherIcon icon="mail" />
                        <span>illumiself@gmail.com</span>
                    </div>

                    <div>
                        <FeatherIcon icon="phone" />
                        <a href="tel:+5551998603836" className="phone-link">
                            (51) 99860-3836
                        </a>
                    </div>

                    <div>
                        <FeatherIcon icon="map-pin" />
                        <span>Av. Assis Brasil, 7351 - Porto Alegre/RS</span>
                    </div>

                </div>
                <a href="mailto:illumiself@gmail.com" className="cta-btn">
                    Fale com um especialista
                </a>
            </div>

            <div className="cta-right">
                <img src={room} alt="" />
            </div>

        </div>
    );
}