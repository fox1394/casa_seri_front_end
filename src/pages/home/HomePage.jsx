import "./HomePage.css";
import { readAreas } from "../../utils/areas";
import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import { HomeInfo } from "../../components/HomeInfo/HomeInfo";
import { PhotoGallery } from "../../components/PhotoGallery/PhotoGallery";
import CookieConsentPopup from "../../components/CookiesPopup/CookieConsentPopup";
import Map from "../../components/Map/Map";
import { BookPanel } from "../../components/BookPanel/BookPanel";

export default function HomePage({ screenSize }) {
  const pictures = readAreas();
  console.log(screenSize);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        setHeaderVisible(false);
      } else if (event.deltaY < 0) {
        setHeaderVisible(true);
      }
    };

    // 📱 Touch start
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    // 📱 Touch move
    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;

      if (deltaY > 0) {
        setHeaderVisible(false);
      } else if (deltaY < 0) {
        setHeaderVisible(true);
      }

      touchStartY.current = currentY;
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const [headerVisible, setHeaderVisible] = useState(true);
  console.log(headerVisible);

  return (
    <>
      <div className="homepage">
        {/* VIDEO BACKGROUND */}
        <video className="video-bg" autoPlay loop muted playsInline>
          <source
            src='/videos/animation_casa_seri.mp4'
            type="video/mp4"
          />
          Il tuo browser non supporta il tag video.
        </video>
        {/* OVERLAY (opzionale scurimento) */}
        <div className="overlay"></div>
        <div className="content">
          <Header headerVisible={headerVisible} />
          <HomeInfo/>
          <PhotoGallery pictures={pictures} />
          <button className="buttonMorePhoto">Altre foto</button>
          <Map/>
        <CookieConsentPopup />
        </div>
      </div>
    </>
  );
}
