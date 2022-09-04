import "./App.css";
import Cars from "./Pages/Cars";
import Detailcar from "./Pages/Detailcar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/NotFound";
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  return (

    <Routes>
      <Route path='/'>
        <Route index element={<LandingPage />} />
        <Route path='carimobil'>
          <Route index element={<SearchBar />} />
        </Route>
        <Route>
          <Route path='mobil' element={<Cars />} />
          <Route path=':id' element={<Detailcar />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
