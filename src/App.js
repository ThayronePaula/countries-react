import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
