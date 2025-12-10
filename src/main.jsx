import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import OrderPage from "./pages/OrderPage/OrderPage";

import LoginPageContainer from "./pages/LoginPage/LoginPageContainer";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/AuthContext";
import { CartCountProvider } from "./store/CartContext";

import "./styles/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartCountProvider>
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
        </CartCountProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
