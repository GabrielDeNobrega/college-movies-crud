import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome-page/welcome-page";
import MainPage from "./pages/main-page/main-page";
import Form from "./pages/form-page/form";

function App() {
  const [hasNewMovie, setHasNewMovie] = useState<boolean>(false);

  const onFormSend = (hasNewlyAddedMovie: boolean) => {
    setHasNewMovie(hasNewlyAddedMovie);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<MainPage hasNewMovie={hasNewMovie} />} />
        <Route path="/form" element={<Form onFormSend={onFormSend} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
