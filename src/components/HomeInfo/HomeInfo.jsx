import "./HomeInfo.css";
import '../../language';
import { useTranslation } from "react-i18next";


export function HomeInfo() {
  const {t} = useTranslation();

  return (
    <>
      <div className="home-info-container">
        <h4 className="home-info-title">
          {t("homeTitle")}
        </h4>
        <h4 className="home-info-subtitle">{t("subTitle")}</h4>
        <h4 className="home-info-subtitle">{t("subTitleDetail")}</h4>
        
        <div className="home-info-detail">
          <p>
            {t("detail")}
          </p>
        </div>
      </div>
    </>
  );
}
