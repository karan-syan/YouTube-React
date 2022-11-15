import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WatchPlay from "./Pages/WatchPlay";
import { useDispatch } from "react-redux";
import { callapi } from "./redux/actions/callapi";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callapi("react"));
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<WatchPlay />} />
      </Routes>
    </div>
  );
}

export default App;
