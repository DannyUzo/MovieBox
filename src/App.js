import Home from "./components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MoviePage from "./components/MoviePage";
import TVseries from "./components/TVseries";
import UpComing from "./components/UpComing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MoviePage />} />
        <Route path="/tvseries" element={<TVseries/>}/>
        <Route path="/upcoming" element={<UpComing/>}/>
      </Routes>
    </div>
  );
}

export default App;
