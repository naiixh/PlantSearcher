import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Searcher from "./components/Searcher";
import MyNavbar from "./components/Navbar";
import Plant from "./components/Plant";
import "./i18n";
import './index.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <MyNavbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/searcher" element={<Searcher />} />
      <Route path="/plant/:plantName" element={<Plant />} />
    </Routes>  
  </BrowserRouter>,
); 

