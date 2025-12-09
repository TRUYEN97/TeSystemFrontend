import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";

import Login from "./pages/AuthPages/Login";
import SignUp from "./pages/AuthPages/SignUp";
import Home from "./pages/Dashboard/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
