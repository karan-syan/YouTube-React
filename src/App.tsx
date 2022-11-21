import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import WatchPlay from "./Pages/WatchPlay";
import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import History from "./Pages/History";
function App() {
  return (
    <SkeletonTheme baseColor="#f3f3f3" highlightColor="#ecebeb">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<WatchPlay />} />
          <Route path="/search/:searchname" element={<Search />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </SkeletonTheme>
  );
}

export default App;
