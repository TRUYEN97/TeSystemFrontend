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
import { ROUTE } from "./constants/routes";
import NewUserPage from "./pages/User/NewUser";
import TeamsPage from "./pages/Team/Teams";
import NewTeamPage from "./pages/Team/NewTeam";

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
            <Route path={ROUTE.NEW_USER} element={<NewUserPage />} /> 

            <Route path="/teams" element={<TeamsPage />} />
            <Route path={ROUTE.NEW_TEAM} element={<NewTeamPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
