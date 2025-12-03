import { BrowserRouter as Router, Routes, Route } from "react-router";

import Login from "./pages/AuthPages/Login";
import SignUp from "./pages/AuthPages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
