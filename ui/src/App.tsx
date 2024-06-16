import Loader from "./components/Loader";
import NotificationProvider from "./providers/Notification/Notification.provider";
import { defaultTheme } from "./theme/defaultTheme";
import HomePage from "./views/HomePage";
import RegistrationPage from "./views/RegistrationPage";
import "@/theme/global.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import React, { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const LoginPage = lazy(async () => await import("@/views/LoginPage"));

function App(): ReactElement {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledEngineProvider injectFirst>
        <NotificationProvider>
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <Suspense fallback={<Loader />}>
                    <LoginPage />
                  </Suspense>
                }
                path="login"
              />
              <Route
                element={
                  <Suspense fallback={<Loader />}>
                    <RegistrationPage />
                  </Suspense>
                }
                path="register"
              />
              <Route
                element={
                  <Suspense fallback={<Loader />}>
                    <HomePage />
                  </Suspense>
                }
                path="home"
              />
              <Route path="/" element={<Navigate to="login" />}></Route>
            </Routes>
          </BrowserRouter>
        </NotificationProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
