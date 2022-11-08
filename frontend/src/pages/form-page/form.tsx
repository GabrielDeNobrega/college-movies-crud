import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";

function Form() {
  const navigate = useNavigate();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/main");
  };

  return (
    <div className="form">
      <div className="title">
        <h1>Inclusão de Novo Filme</h1>
      </div>

      <form noValidate className="form-indeed">
        <label htmlFor="name">Nome</label>
        <input id="name" placeholder="Digite o nome do filme!" type="text" />
        <label htmlFor="genre">Gênero</label>
        <input id="genre" placeholder="Digite o gênero do filme!" type="text" />
        <label htmlFor="release">Lançamento</label>
        <input
          id="release"
          placeholder="Digite o ano de lançamento!"
          type="text"
        />

        <div className="buttons-of-the-form">
          <Link className="form-buttons-return" to="/main">
            Cancelar
          </Link>
          <button className="form-buttons-send" onClick={submitHandler}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
