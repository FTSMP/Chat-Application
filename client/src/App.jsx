import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1> Home </h1>} />
          <Route path="about" element={<h1> About </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
