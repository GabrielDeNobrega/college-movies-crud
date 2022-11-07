import React from "react";
import "./welcome-page.css";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="welcome">
      <div className="title-and-subtitle">
        <h1>Listagem e Inclusão de Filmes</h1>
        <h2>TADS Atividade de Desenvolvimento Web (2022 - 2º) — Turma B</h2>
      </div>

      <div className="name-and-notes">
        <div className="name">
          <p>
            <b>Nome:</b> <strong>Gabriel de Nóbrega Araújo</strong>
          </p>
          <p>
            <b>RA:</b> <strong>1142102375</strong>
          </p>
        </div>
        <div className="notes">
          <p>
            <b>Observações:</b>
            <br />
            <em>
              Olá, Professor! Para que o site funcione corretamente, deve-se
              importar o "backend" utilizando a opção "Existing Maven projects"
              na IDE desejada. Após a importação, basta rodar o projeto
              utilizando o plugin STS 4.0 e o site funcionará de forma plena.
            </em>
          </p>
        </div>
      </div>
      <Link className="button-to-main" to="/main">
        Listagem de Filmes
      </Link>
    </div>
  );
}

export default WelcomePage;
