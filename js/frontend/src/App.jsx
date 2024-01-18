import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
