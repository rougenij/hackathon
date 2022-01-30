import { Routes, Route } from "react-router-dom";
import HomePage from "./View/Pages/HomePage/HomePage.jsx";
import CityPage from "./View/Pages/CityPage/CityPage.jsx";
import AboutPage from "./View/Pages/AboutPage/AboutPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/citypage" element={<CityPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
