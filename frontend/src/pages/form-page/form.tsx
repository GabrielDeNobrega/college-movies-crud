import React from "react";
import { Link } from "react-router-dom";
import "./form.css";

function Form() {
  return (
    <div className="form">
      <div className="title">
        <h1>Inclusão de Novo Filme</h1>
      </div>
      <div className="buttons-of-the-form">
        <Link className="form-buttons" to="/main">
          Cancelar
        </Link>
        <Link className="form-buttons" to="">
          Enviar
        </Link>
      </div>
    </div>
  );
}

export default Form;
