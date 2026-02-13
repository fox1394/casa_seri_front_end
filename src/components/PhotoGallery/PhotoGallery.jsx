import "./PhotoGallery.css";
import { Photo } from "./Photo";

export function PhotoGallery({ pictures }) {
  return (
    <>
      <div className="photos-grid">
        {pictures.map((photo) => {
          return <Photo key={photo.id} photo={photo} />;
        })}
      </div>
    </>
  );
}
