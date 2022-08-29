import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Modal1 } from "./PortfolioModals/PortfolioModal1";
import { Modal2 } from "./PortfolioModals/PortfolioModal2";
import { Modal3 } from "./PortfolioModals/PortfolioModal3";
import { Modal4 } from "./PortfolioModals/PortfolioModal4";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolioModal1" element={<Modal1 />} />
      <Route path="/portfolioModal2" element={<Modal2 />} />
      <Route path="/portfolioModal3" element={<Modal3 />} />
      <Route path="/portfolioModal4" element={<Modal4 />} />
    </Routes>
  </BrowserRouter>,
);