import { Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import { getScreenSize } from "./utils/display";
import "./App.css";
import i18n from "i18next";

function App() {
  const screenSize = getScreenSize();
  console.log(screenSize);
  const storedLanguageAbbreviation = window.sessionStorage.getItem(
    "LanguageAbbreviation",
  );
  i18n.changeLanguage(storedLanguageAbbreviation);

  return (
    <>
      <Routes>
        <Route index element={<HomePage screenSize={screenSize} />} />
      </Routes>
    </>
  );
}

export default App;
