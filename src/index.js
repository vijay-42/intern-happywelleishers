
import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Banner from "./banner";
import About from "./about";
import Service from "./service";
import Contact from "./Contact";
// import NoPage from "./noPage";
import reportWebVitals from './reportWebVitals';

export default function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Banner />} />
          <Route path="service" element={<Service />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps />);
reportWebVitals();
