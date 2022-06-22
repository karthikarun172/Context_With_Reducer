import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Setting from "./Pages/Setting";
import Dashboard from "./Pages/Dashboard";
import { TodoProvider } from "./Context/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Routes>
          <Route path="/settings" element={<Setting />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </TodoProvider>
    </div>
  );
}

export default App;
