import { useRef, useEffect, useState } from "react";

import pic1 from "../img/proj_management/pic1.png";
import pic2 from "../img/proj_management/pic2.png";
import pic3 from "../img/proj_management/pic3.png";
import pic4 from "../img/proj_management/pic4.png";

const images = [pic1, pic2, pic3, pic4];

export default function ProjectManagement() {

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

            <h2>Project Management Optimization</h2>

            <p className="section-intro">
                Efficient project management is essential for signage companies managing
                design, fabrication and installation workflows. We analyze your current
                structure and identify improvements to increase visibility and operational efficiency.
            </p>

            <ul className="feature-list">
                <li>Better identification of customer needs</li>
                <li>Faster creation of clear Scope of Work documents</li>
                <li>Improved project evaluation and planning</li>
                <li>Visual improvements for project tracking</li>
                <li>Centralized project information systems</li>
            </ul>

            <div className="media-grid">

                <video
                    ref={videoRef}
                    className="media-video"
                    src="https://firebasestorage.googleapis.com/v0/b/moonsigns-3a192.appspot.com/o/Le3ed-website%2FLe3ed-Project_Management.mp4?alt=media"
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