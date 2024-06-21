import "./App.css";
import Cars from "./cars";

function App() {
  return (
    <div className="App">
      <p>CARS DETAILS</p>
      <Cars color="blue" />
      <Cars color="red" />
      <Cars color="black" />
    </div>
  );
}

export default App;
