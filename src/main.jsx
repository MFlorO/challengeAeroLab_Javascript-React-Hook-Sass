import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App";
import { ProductProvider } from "./api/productContext";
import { UserProvider } from "./api/userContext";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./auth/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <UserProvider>
          <Router>
            <App />
          </Router>
        </UserProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);
