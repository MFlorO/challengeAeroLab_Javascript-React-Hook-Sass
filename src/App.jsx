import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, LandingPage } from "~/pages";
// import { AuthContext, useAuthContext } from "~/auth";


function App() {

  // const first = useAuthContext();

  // console.log("AuthContext", first)

  return (
    <Routes>

      {/*Reemplaza el Swich de React-Router-Dom v5. Tampoco se ponen mas los exact*/}
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
