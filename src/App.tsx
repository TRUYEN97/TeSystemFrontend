import { BrowserRouter as Router, Routes, Route } from "react-router";

import "./App.css";
import Login from "./pages/AuthPages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
