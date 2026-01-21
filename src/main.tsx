import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import OrderPage from "./pages/OrderPage/OrderPage";

import LoginPageContainer from "./pages/LoginPage/LoginPageContainer";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/AuthContext";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ThemeProvider } from "@/config/ThemeContext";

import "./styles/main.scss";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element #root not found");
}

createRoot(rootEl).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/login" element={<LoginPageContainer />} />
            <Route
              path="/order"
              element={
                <PrivateRoute>
                  <OrderPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
