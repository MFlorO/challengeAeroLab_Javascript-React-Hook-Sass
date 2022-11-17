import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App";
import { ProductProvider } from "./api/productContext";
import { UserProvider } from "./api/userContext";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
    <UserProvider>
      <App />
    </UserProvider>
    </ProductProvider>
  </React.StrictMode>

);
