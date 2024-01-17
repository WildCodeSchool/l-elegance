import Counter from "./components/Counter";
import logo from "./assets/logo.svg";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
