import { useRef, useEffect } from "react";

export default function QuotingSystem() {

    const videoRef = useRef(null);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }

            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        };

    }, []);

    return (
        <div className="container">

            <h2>Quoting Systems</h2>

            <p className="section-intro">
                Our quoting systems are designed specifically for signage companies,
                improving speed, accuracy and scalability.
            </p>

            <ul className="feature-list">
                <li>Le3eD also works with third-party quoting systems, such as <strong>ShopVox</strong></li>
                <li>Estimation using structured product formulations</li>
                <li>Improved speed and quotation accuracy</li>
                <li>Reduction of manual pricing errors</li>
                <li>Standardized proposal generation</li>
                <li>AI-assisted dimension and material estimation</li>
            </ul>

            <div className="video-wrapper" style={{ marginTop: "40px" }}>
                <div className="media-grid-large">
                    {/* <div className="media-placeholder">Quoting Software Interface</div> */}
                    <video
                        ref={videoRef}
                        className="media-video-large"
                        src="https://firebasestorage.googleapis.com/v0/b/moonsigns-3a192.appspot.com/o/Le3ed-website%2FLe3ed-Quotes.mp4?alt=media"
                        muted
                        loop
                        playsInline
                        controls
                    />
                    {/* <div className="media-placeholder">AI Estimation Example</div> */}
                </div>
            </div>


        </div>
    );
}