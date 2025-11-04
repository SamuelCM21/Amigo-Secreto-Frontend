import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateGame from "./pages/CreateGame";
import RevealPage from "./pages/RevealPage";
import "./styles.css";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateGame />} />
        <Route path="/reveal/:id" element={<RevealPage />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
