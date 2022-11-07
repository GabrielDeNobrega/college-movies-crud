import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import WelcomePage from "./pages/welcome-page/welcome-page";
import MainPage from "./pages/main-page/main-page";
import Form from "./pages/form-page/form";
import { MovieList } from "./types/movie";
import { BASE_URL } from "./utils/requests";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState<MovieList>();
  const param = useParams();
  useEffect(() => {
    axios.get(`${BASE_URL}/movies`).then((response) => {
      setMovies(response.data);
    });
  }, [param.id]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<MainPage movies={movies} />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
