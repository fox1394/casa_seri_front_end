import "./NavigationBar.css";

export default function NavigationBar({ hideNavBar }) {
  return (
    <>
      <div className={"navbarcontainer"}>
        <ul className="navigation-items-container">
          <li
            className="navigation-bar-item"
            onClick={() => scrollToSection("home-info-container")}
          >
            <a className="navigation-bar-item-text">Home</a>
          </li>
          <li className="navigation-bar-item">
            <a
              className="navigation-bar-item-text"
              onClick={() => scrollToSection("photogallery-title")}
            >
              Galleria foto
            </a>
          </li>
          <li className="navigation-bar-item">
            <a
              className="navigation-bar-item-text"
              onClick={() => scrollToSection("map-container")}
            >
              Dove siamo
            </a>
          </li>
          <li className="navigation-bar-item">
            <a className="navigation-bar-item-text">Chi siamo</a>
          </li>
          <li className="navigation-bar-item">
            <a
              className="navigation-bar-item-text"
              onClick={() => scrollToSection("booking-container")}
            >
              Prenota ora
            </a>
          </li>
        </ul>
      </div>
    </>
  );

  function scrollToSection(section) {
    const sections = document.getElementsByClassName(section);

    if (sections.length > 0) {
      sections[0].scrollIntoView({ behavior: "smooth"});
    }

    if (typeof hideNavBar === "function") {
      hideNavBar();
    }
  }
}
