import { Mail } from "react-feather";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <h2><strong>AI 4 SIGNS</strong></h2>
                <h2><span>A new approach to <span style={{ textDecoration: "underline" }}>designing and estimating</span> signage projects</span></h2>

                <div className="video-wrapper" style={{ marginTop: "40px" }}>
                    <div className="media-grid-large">

                        <video
                            className="media-video-large"
                            style={{ marginBottom: "60px" }}
                            src="https://firebasestorage.googleapis.com/v0/b/moonsigns-3a192.appspot.com/o/Le3ed-website%2FLe3ed-Ai_4_signs.mp4?alt=media"
                            muted
                            loop
                            playsInline
                            controls
                        />
                    </div>
                </div>

                <hr></hr>

                <h3 style={{ marginTop: "60px" }}>Platforms We Work With</h3>

                <div className="software-grid">
                    <span>Asana</span>
                    <span>Monday</span>
                    <span>ShopVox</span>
                    <span>Zapier</span>
                    <span>Custom Software</span>
                </div>


                <p className="copyright">
                    © Le3eD — Digital Solutions for the Signage Industry
                </p>

                <div className="contact-grid" style={{marginTop:"40px"}}>
                    <a className="contact-item" href="mailto:info@le3ed.com">
                        <Mail size={22} style={{color:"#fff"}}/>
                        <span style={{ color: "#fff" }}>info@le3ed.com</span>
                    </a>
                </div>

            </div>

        </footer >
    );
}