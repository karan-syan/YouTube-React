import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import WatchPlay from "./Pages/WatchPlay";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
  return (
    <SkeletonTheme baseColor="#f3f3f3" highlightColor="#ecebeb">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<WatchPlay />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </SkeletonTheme>
  );
}

export default App;
