import "./App.css";
import PlantList from "./components/PlantList";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <PlantList></PlantList>
    </div>
  );
}

export default App;
