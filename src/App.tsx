import { BrowserRouter as Router, Routes, Route } from "react-router";

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
