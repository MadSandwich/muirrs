import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "./App";
import Main from "./components/Main/Main";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contacts/Contact";
import NotFound from "./components/NotFound/404";

export default function Rout() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
