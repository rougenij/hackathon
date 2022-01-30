import './App.css';
import HomePage from './View/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/citypage" element={<CityPage />} />
        <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;