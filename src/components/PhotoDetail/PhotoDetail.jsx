import { useEffect } from "react";
import "./PhotoDetail.css";

const overlayStyle = {
  position: "fixed",
  inset: 0,
  margin: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  borderRadius: "12px",
  width: "750px",
  maxWidth: "100%",
  maxHeight: "90%",
  overflow: "auto",
  position: "relative",
};

const closeButtonStyle = {
  position: "absolute",
  right: "1px",
  border: "none",
  background: "transparent",
  fontSize: "20px",
  padding: "5px 10px",
  cursor: "pointer",
};

const PhotoDetail = ({
  isOpen,
  onClose,
  children,
  photoTitle,
  photoDetail,
}) => {
    useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  console.log(photoTitle);

  return (
    <>
      <div
        className="photo-detail-container"
        style={overlayStyle}
        onClick={onClose}
      >
        <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
          <button style={closeButtonStyle} onClick={onClose}>
            ✕
          </button>
          <h4 className="photo-text-big">{photoTitle}</h4>
          <h6 className="photo-detail-big">{photoDetail}</h6>
          {children}
        </div>
      </div>
    </>
  );
};

export default PhotoDetail;
