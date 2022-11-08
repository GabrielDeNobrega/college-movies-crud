import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import WelcomePage from "./pages/welcome-page/welcome-page";
import MainPage from "./pages/main-page/main-page";
import Form from "./pages/form-page/form";
import { Movie } from "./types/movie";
import { BASE_URL } from "./utils/requests";
import axios from "axios";

function App() {
  const [movie, setMovie] = useState <Array<Movie>>();
  const param = useParams();
  useEffect(() => {
    axios.get(`${BASE_URL}/movies`).then((response) => {
      setMovie(response.data);
      console.log(response.data);
    });
  }, [param.id]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<MainPage movie={movie} />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
