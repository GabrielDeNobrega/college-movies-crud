import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";

function Form() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [release, setRelease] = useState<number | null>(null);

  async function createNewMovie(event: React.FormEvent) {
    const bodyRequest = {
      name: name,
      genre: genre,
      release: release,
    };

    event.preventDefault();
    await axios
      .post("http://localhost:8080/movies/createnewmovie", bodyRequest)
      .then((response) => alert("Novo filme inserido!"));

    navigate("/main");
  }

  return (
    <div className="form">
      <div className="title">
        <h1>Inclusão de Novo Filme</h1>
      </div>

      <form noValidate className="form-indeed">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Digite o nome do filme!"
          type="text"
        />
        <label htmlFor="genre">Gênero</label>
        <input
          id="genre"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
          placeholder="Digite o gênero do filme!"
          type="text"
        />
        <label htmlFor="release">Lançamento</label>
        <input
          id="release"
          onChange={(e) => setRelease(e.target.valueAsNumber)}
          //value={release}
          placeholder="Digite o ano de lançamento!"
          type="number"
        />

        <div className="buttons-of-the-form">
          <Link className="form-buttons-return" to="/main">
            Cancelar
          </Link>
          <button className="form-buttons-send" onClick={createNewMovie}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
