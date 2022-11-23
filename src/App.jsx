import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, LandingPage } from "~/pages";

function App() {
  return (
      
      <Routes> {/*Reemplaza el Swich de React-Router-Dom v5. Tampoco se ponen mas los exact*/}

      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Home />} />
      
    </Routes>
  );
}

export default App;
