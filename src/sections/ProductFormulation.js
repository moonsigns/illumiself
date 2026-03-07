import { useRef, useEffect, useState } from "react";

import pic1 from "../img/prod_formulation/pic1.png";
import pic2 from "../img/prod_formulation/pic2.png";
import pic3 from "../img/prod_formulation/pic3.png";
import pic4 from "../img/prod_formulation/pic4.png";

const images = [pic1, pic2, pic3, pic4];

export default function ProductFormulation() {

    const videoRef = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    videoRef.current?.play();
                } else {
                    videoRef.current?.pause();
                }

            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        const carouselInterval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 3500);

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
            clearInterval(carouselInterval);
        };

    }, []);

    return (
        <div className="container">

            <h2>Product Formulation</h2>

            <p className="section-intro">
                We help signage companies structure products, pricing and production
                variables using advanced spreadsheets or custom software solutions.
            </p>

            <ul className="feature-list">
                <li>Structured product definitions and components</li>
                <li>Reliable price formulation models</li>
                <li>Organization of materials, labor and variables</li>
                <li>Preparation for future ERP integrations</li>
            </ul>

            <div className="media-grid">

                <video
                    ref={videoRef}
                    className="media-video"
                    src="https://firebasestorage.googleapis.com/v0/b/moonsigns-3a192.appspot.com/o/Le3ed-website%2FLe3ed-Prod_formulation.mp4?alt=media"
                    muted
                    loop
                    playsInline
                    controls
                />

                <div className="carousel">

                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >

                        {images.map((img, i) => (
                            <img key={i} src={img} className="carousel-img" alt="" />
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}