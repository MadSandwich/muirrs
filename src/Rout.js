import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "./App";
import NotFound from "./components/NotFound/404";
import Portfolio from "./components/Portfolio/Portfolio";
import Main from "./components/Main/Main";

export default function Rout() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
