import "./BookPanel.css";
import '../../language';
import { useTranslation } from "react-i18next";


export function BookPanel() {
  const {t} = useTranslation();

  return (
    <>
      <div className="booking-container">
        <input className="booking-input" placeholder="Check In" type="date" />
        <input className="booking-input" placeholder="Check Out" type="date"/>
        <select className="booking-selector">
          <option value="" disabled selected hidden>
            {t("adults")}
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select className="booking-selector">
          <option value="" disabled selected hidden>
            {t("childs")}
          </option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button className="booking-button">{t("booknow")}</button>
      </div>
    </>
  );
}
