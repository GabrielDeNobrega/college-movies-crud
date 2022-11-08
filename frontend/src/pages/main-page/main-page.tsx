import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../types/movie";
import "./main-page.css";

type MovieInformationProps = {
  movie: Array<Movie> | undefined;
};

function MainPage({ movie }: MovieInformationProps) {
  return (
    <div className="main-page">
      <Link className="main-page-buttons" to="/">
        Página Inicial
      </Link>
      <div className="title">
        <h1>Listagem de Filmes</h1>
      </div>

      <div className="movies">
        <table>
          <thead>
            <tr>
              <th>
                <div className="movies-single-header">ID</div>
              </th>
              <th>
                <div className="movies-single-header">Título</div>
              </th>
              <th>
                <div className="movies-single-header">Gênero</div>
              </th>
              <th>
                <div className="movies-single-header">Ano de Lançamento</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {movie?.map((movie) => (
              <tr key={movie.id}>
                <td>
                  <div className="movies-single-item">
                    <b>{movie.id}</b>
                  </div>
                </td>
                <td>
                  <div className="movies-single-item">{movie.name}</div>
                </td>
                <td>
                  <div className="movies-single-item">{movie.genre}</div>
                </td>
                <td>
                  <div className="movies-single-item">{movie.release}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link className="main-page-buttons" to="/form">
        Incluir Novo
      </Link>
    </div>
  );
}

export default MainPage;
