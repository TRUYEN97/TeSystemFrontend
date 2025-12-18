import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";

import "./index.css";
import "./i18n.ts";
import AuthProvider from "./contexts/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>,
);
