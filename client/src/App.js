import { Routes, Route } from "react-router-dom";
import HomePageCulTour from "./View/Pages/HomePageCulTour/HomePageCulTour";
import CityPage from "./View/Pages/CityPage/CityPage.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageCulTour />} />
        <Route path="/:city" element={<CityPage />} />
    
      </Routes>
    </div>
  );
}

export default App;
