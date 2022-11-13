import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import WatchPlay from "./Pages/WatchPlay";
import { useDispatch } from "react-redux";
import { callapi } from "./redux/actions/callapi";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callapi());
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<WatchPlay />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
