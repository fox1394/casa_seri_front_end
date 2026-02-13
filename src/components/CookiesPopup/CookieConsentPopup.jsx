import { useEffect, useState } from "react";

// Quale chiave usare in localStorage
const COOKIE_KEY = "morris_body_massage_cookie_consent";

const CookieConsentPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        This site uses cookies to improve the browsing experience.
        <a href="/privacy" style={styles.link}>
          Privacy policy
        </a>
      </p>
      <button style={styles.button} onClick={acceptCookies}>
        Accetta
      </button>
    </div>
  );
};

export default CookieConsentPopup;

// ===== STILI IN-LINE =====
const styles = {
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "1rem",
    backgroundColor: "#222",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1000,
  },
  text: {
    margin: 0,
    fontSize: "0.9rem",
  },
  link: {
    color: "#4fc3f7",
    textDecoration: "underline",
  },
  button: {
    backgroundColor: "#4fc3f7",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#222",
    fontWeight: "bold",
  },
};
