import heroBackground from "../img/hero-background-2.svg";

export default function Hero() {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className="container hero-container">

                <h1>Digital Solutions for the Signage Industry</h1>

                <p className="hero-subtitle">
                    Le3eD specializes in dynamic and customized solutions for signage companies.
                    We evaluate your operations and design systems to improve quoting, project
                    management, pricing structures and internal processes.
                </p>

                <div className="hero-buttons">
                    <a href="#product" className="btn-primary">Explore Services</a>
                    <a href="#contact" className="btn-secondary">Contact</a>
                </div>

            </div>

        </section>
    );
}