import FeatherIcon from "feather-icons-react";

export default function WhatsNew() {
    return (
        <div className="benefits">

            <div className="benefit-item highlight">
                <FeatherIcon icon="truck" />

                <div className="benefit-text">
                    <span className="benefit-badge">DESTAQUE</span>
                    <strong>Frete grátis</strong>
                    <small>acima de R$250</small>
                </div>
            </div>

            <div className="benefit-item">
                <FeatherIcon icon="package" />
                <span>Retirada na loja física</span>
            </div>

            <div className="benefit-item">
                <FeatherIcon icon="dollar-sign" />
                <span>Preços baixos</span>
            </div>

            <div className="benefit-item">
                <FeatherIcon icon="headphones" />
                <span>Atendimento personalizado</span>
            </div>

        </div>
    );
}