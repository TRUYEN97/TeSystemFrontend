import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./layout/AppLayout";
import Login from "./pages/AuthPages/Login";
import SignUp from "./pages/AuthPages/SignUp";
import Home from "./pages/Dashboard/Home";
import UsersPage from "./pages/User/Users";
import UserPage from "./pages/User/User";
import NotFound from "./pages/NotFound";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
