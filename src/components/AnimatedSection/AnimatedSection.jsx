import { useEffect, useRef, useState } from "react";
import "./AnimatedSection.css";

export function AnimatedSection({ slides }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  console.log(slides);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="xslide-container" ref={sectionRef}>
      {slides.map((slide) => {
        const sourceImage = `../../../assets/areas/${slide.src}`;
        return (
          <section
            ref={sectionRef}
            className={`animated-section ${visible ? "visible" : ""}`}
            key={slide.description}
          >
            <div className="image-container">
              <img src={sourceImage} alt="Example" />
            </div>
            <div className="text-container">
              <h3>{slide.description}</h3>
            </div>
          </section>
        );
      })}
    </div>
  );
}
