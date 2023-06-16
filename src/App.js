import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import "./styles/App.scss";
import "./styles/Normalize.scss";
import Home from "./Pages/Home";
import SignUp from "./Pages/SIgnUp";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
