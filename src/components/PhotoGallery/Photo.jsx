import "./Photo.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../../language";
import PhotoDetail from "../PhotoDetail/PhotoDetail";
import { getAreaDetail } from "../../utils/utils";

// importa TUTTE le immagini una volta sola
const images = import.meta.glob("../../assets/areas/**/*", {
  eager: true,
});

export function Photo({ photo }) {
  
  const imagePath = `../../assets/areas/${photo.src}`;
  const sourceImage = images[imagePath]?.default;
  
  console.log(sourceImage);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="photo-container" onClick={() => setOpen(true)}>
        <img className="photo-image" src={sourceImage} alt={sourceImage}></img>
        <div className="photo-text-container">
          <div className="photo-text">{t(photo.resoruce)}</div>
          <div className="photo-text-detail">
            {getAreaDetail(t(photo.resoruce), t)}
          </div>
        </div>

        <PhotoDetail
          isOpen={open}
          onClose={() => setOpen(false)}
          photoTitle={t(photo.resoruce)}
          photoDetail={getAreaDetail(t(photo.resoruce), t)}
        >
          <img className="photo-image-big" src={sourceImage}></img>
        </PhotoDetail>
      </div>
    </>
  );
}
