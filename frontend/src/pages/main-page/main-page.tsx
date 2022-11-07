import React from "react";
import { Link } from "react-router-dom";
import "./main-page.css";

function MainPage() {
  return (
    <div className="main-page">
      <Link className="main-page-buttons" to="/">
        Página Inicial
      </Link>
      <div className="title">
        <h1>Listagem de Filmes</h1>
      </div>
      <Link className="main-page-buttons" to="/form">
        Incluir Novo
      </Link>
    </div>
  );
}

export default MainPage;
