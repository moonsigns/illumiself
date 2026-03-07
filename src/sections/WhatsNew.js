import { useRef, useEffect } from "react";

export default function WhatsNew() {

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
        <section className="whatsnew">

            <div className="container whatsnew-grid">

                <div className="whatsnew-text">

                    <h2>What’s New — Ai 4 Signs</h2>

                    <p>
                        <strong>Ai 4 Signs is an all-in-one software platform developed by Le3eD </strong>
                        to modernize how signage companies design, estimate and present
                        their projects.
                    </p>

                    <p>
                        The platform combines product formulation, project estimation and
                        visual presentation tools into a single workflow. Using structured
                        product databases and intelligent estimation models, Ai 4 Signs
                        can calculate project pricing while simultaneously preparing a
                        clear Scope of Work for the client.
                    </p>

                    <p>
                        By combining pricing estimation, project documentation and
                        AI-powered visualization, Ai 4 Signs helps companies produce
                        faster quotations, improve proposal clarity and deliver a more
                        professional experience to their customers.
                    </p>

                </div>

                <div className="whatsnew-video">

                    <video
                        ref={videoRef}
                        className="media-video"
                        src="https://firebasestorage.googleapis.com/v0/b/moonsigns-3a192.appspot.com/o/Le3ed-website%2FLe3ed-Ai_4_signs.mp4?alt=media"
                        muted
                        loop
                        playsInline
                        controls
                    />

                </div>

            </div>

        </section>
    );
}