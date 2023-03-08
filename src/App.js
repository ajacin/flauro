import "./App.css";
import PlantDetails from "./components/PlantDetails";
import PlantList from "./components/PlantList";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Routes, Route } from "react-router-dom";
import QrCodes from "./components/QrCodes";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <>
        <Routes>
          <Route path="/" element={<PlantList />} />
          <Route path="/plants/:id" element={<PlantDetails />} />
          <Route path="/qr" element={<QrCodes />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
