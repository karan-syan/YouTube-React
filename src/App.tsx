import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import WatchPlay from "./Pages/WatchPlay";
import React from "react";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<WatchPlay />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
