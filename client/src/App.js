import { Routes, Route } from "react-router-dom";
import HomePage from "./View/Pages/HomePage/HomePage";
import CityPage from "./View/Pages/CityPage/CityPage";
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
