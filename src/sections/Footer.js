import FeatherIcon from "feather-icons-react";

export default function Footer({ openModal }) {
    return (
        <footer className="footer">

            <div className="footer-grid">

                {/* ENDEREÇO */}
                <div>
                    <h4>Endereço</h4>

                    <p
                        onClick={() =>
                            window.open(
                                "https://www.google.com/maps?q=Av.+Assis+Brasil+7341+Porto+Alegre",
                                "_blank"
                            )
                        }
                    >
                        Av. Assis Brasil 7341
                    </p>

                    <p onClick={() => openModal("contact")}>
                        illumiself@gmail.com
                    </p>

                    <p onClick={() => openModal("contact")}>
                        (51) 99860-3836
                    </p>
                </div>

                {/* LOJA */}
                <div>
                    <h4>Loja</h4>

                    <p onClick={() => {
                        console.log("CLICK FUNCIONOU");
                        openModal("products");
                    }}>
                        Produtos
                    </p>
                    <p onClick={() => openModal("products")}>Fitas LED</p>
                    <p onClick={() => openModal("products")}>Perfis</p>
                    <p onClick={() => openModal("products")}>Fontes</p>
                    <p onClick={() => openModal("products")}>Fios</p>
                    <p onClick={() => openModal("products")}>Interruptores</p>
                    <p onClick={() => openModal("products")}>Tomadas</p>
                    <p onClick={() => openModal("products")}>Spots</p>
                    <p onClick={() => openModal("products")}>Sensores</p>
                    <p onClick={() => openModal("products")}>Plafons</p>
                    <p onClick={() => openModal("products")}>Diversos</p>
                    <p onClick={() => openModal("products")}>Promoções</p>
                </div>

                {/* SUPORTE */}
                <div>
                    <h4>Suporte</h4>

                    <p onClick={() => openModal("contact")}>Contato</p>
                    <p onClick={() => openModal("contact")}>Central de ajuda</p>
                </div>

                {/* POLÍTICA */}
                <div>
                    <h4>Política</h4>

                    <p onClick={() => openModal("terms")}>Termos e Condições</p>
                </div>

            </div>

            <div className="footer-map">
                <iframe
                    title="map"
                    src="https://www.google.com/maps?q=Av.+Assis+Brasil+7341+Porto+Alegre&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0, borderRadius: "10px", marginTop: "30px" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <div className="footer-bottom">
                © 2026 Illumiself - Iluminação para móveis
            </div>


        </footer>
    );
}