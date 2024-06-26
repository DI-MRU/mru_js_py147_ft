import "./App.css";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { Home } from "./Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
