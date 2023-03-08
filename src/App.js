import "./App.css";
import PlantDetails from "./components/PlantDetails";
import PlantList from "./components/PlantList";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <>
        <Routes>
          <Route path="/" element={<PlantList />} />
          <Route path="/plants/:id" element={<PlantDetails />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
