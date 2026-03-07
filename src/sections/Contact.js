import { Mail, Phone, Linkedin, Globe } from "react-feather";

export default function Contact() {

    return (

        <section className="contact-section">

            <div className="container contact-container">

                <h2>Contact</h2>

                <p className="contact-intro">
                    Interested in improving your signage company workflows or implementing
                    custom digital tools? Let's talk.
                </p>

                <div className="contact-grid">

                    <a className="contact-item" href="mailto:info@le3ed.com">
                        <Mail size={22} />
                        <span>info@le3ed.com</span>
                    </a>

                    {/* <a className="contact-item" href="#+1 (514) 617-6288">
                        <Phone size={22} />
                        <span>Phone</span>
                    </a> */}

                    {/* <a className="contact-item" href="#">
                        <Linkedin size={22} />
                        <span>LinkedIn</span>
                    </a>

                    <a className="contact-item" href="#">
                        <Globe size={22} />
                        <span>Website</span>
                    </a> */}

                </div>

            </div>

        </section>

    );

}