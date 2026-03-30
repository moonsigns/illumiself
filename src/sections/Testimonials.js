import FeatherIcon from "feather-icons-react";

export default function ProjectManagement() {
    return (
        <div className="testimonials">

            <div className="testimonial">
                <h3>
                    <FeatherIcon icon="user" />
                    Thiago Trolle
                </h3>
                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <FeatherIcon key={i} icon="star" />
                    ))}
                </div>

                <div className="stars">
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                </div>

                <p>
                    Incrível! Escritório, cozinha, quarto e sala... todas as áreas iluminadas com produtos da Illumiself.
                    Tudo veio muito bem embalado e organizado. Produtos com ótimo preço e equipe super profissional.
                    Recomendo demais!
                </p>
            </div>

            <div className="testimonial">
                <h3>
                    <FeatherIcon icon="user" />
                    Matheus De Leon
                </h3>
                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <FeatherIcon key={i} icon="star" />
                    ))}
                </div>

                <div className="stars">
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                </div>

                <p>
                    Sempre peço ajuda e sou muito bem atendido. Material de alta qualidade, entrega rápida e preço justo.
                    Recomendo muito!
                </p>
            </div>

            <div className="testimonial">
                <h3>
                    <FeatherIcon icon="user" />
                    Taiana Dewes
                </h3>
                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <FeatherIcon key={i} icon="star" />
                    ))}
                </div>

                <div className="stars">
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                </div>

                <p>
                    Atendimento rápido e eficiente, entrega organizada e profissionais que entendem do assunto.
                    Excelente experiência, recomendo muito!
                </p>
            </div>

            <div className="testimonial">
                <h3>
                    <FeatherIcon icon="user" />
                    Alex Antonio Kerber
                </h3>
                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <FeatherIcon key={i} icon="star" />
                    ))}
                </div>

                <div className="stars">
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                    <i data-feather="star"></i>
                </div>

                <p>
                    Atendimento prático, rápido e muito atencioso. Preços justos e até abaixo do mercado.
                    Recomendo muito!
                </p>
            </div>

            <div className="testimonial">
                <h3>
                    <FeatherIcon icon="user" />
                    Mara Mazui
                </h3>

                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <FeatherIcon key={i} icon="star" />
                    ))}
                </div>

                <p>
                    Recomendo muito! Excelente organização, entrega rápida, materiais de ótima qualidade e atendimento impecável.
                </p>
            </div>

            <div className="testimonial">
                <h3>
                    <FeatherIcon icon="user" />
                    Paula Nobre
                </h3>

                <div className="stars">
                    {[...Array(5)].map((_, i) => (
                        <FeatherIcon key={i} icon="star" />
                    ))}
                </div>

                <p>
                    Atendimento personalizado e atencioso. Foi um prazer comprar, me senti totalmente confiante durante todo o processo.
                </p>
            </div>

        </div>
    );
}