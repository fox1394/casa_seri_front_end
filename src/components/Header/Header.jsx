import "./Header.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import logo from "../../assets/images/casa_seri_noborders.png";

export default function Header({ headerVisible }) {
  return (
    <>
      <div
        className={
          headerVisible ? "header-container" : "header-container hidden"
        }
      >
        <div className="left"></div>
        <img className="header-logo" src={logo} alt="Logo" />
        <div className="right">
          <LanguageSelector />
        </div>
      </div>
    </>
  );
}
