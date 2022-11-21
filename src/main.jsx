import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProductProvider } from "./api/productContext";
import { UserProvider } from "./api/userContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider domain="dev-6hbusukhp3pjc7vb.us.auth0.com" clientId="1dFy1uXpDovCSS1ytUSovr919jH2sNJm" redirectUri={window.location.origin}>
      <ProductProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ProductProvider>
    </Auth0Provider>
  </React.StrictMode>
);
