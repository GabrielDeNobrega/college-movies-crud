import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome-page/welcome-page";
import MainPage from "./pages/main-page/main-page";
import Form from "./pages/form-page/form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
