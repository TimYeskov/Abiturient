import React, { useState, useEffect } from "react";
import { useColorTheme } from "./hooks/useColorTheme";
import { Route, Routes } from "react-router";

import "./styles/Normalize.scss";

import Home from "./Pages/Home";
import SignUp from "./Pages/SIgnUp";

const App = () => {
  const { colorTheme, toggleColorTheme } = useColorTheme();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home colorTheme={colorTheme} toggleColorTheme={toggleColorTheme} />
          }
        />
        <Route
          path="signup"
          element={
            <SignUp
              colorTheme={colorTheme}
              toggleColorTheme={toggleColorTheme}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
