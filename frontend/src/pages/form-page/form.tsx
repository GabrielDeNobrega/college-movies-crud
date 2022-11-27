import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MovieFields, MovieValidatable } from "../../types/movie";
import "./form.css";

const initialMovieValue: MovieValidatable = {
  name: { error: false, value: "", name: "name" },
  genre: { error: false, value: "", name: "genre" },
  release: { error: false, value: "", name: "release" },
};

export type FormProps = {
  onFormSend: (hasNewlyAddedMovie: boolean) => void;
};

function Form({ onFormSend }: FormProps) {
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState<MovieValidatable>({
    name: { error: false, value: "", name: "name" },
    genre: { error: false, value: "", name: "genre" },
    release: { error: false, value: "", name: "release" },
  });

  async function createNewMovie(event: React.FormEvent) {
    event.preventDefault();
    if (!validateInputFields()) return;

    const bodyRequest = {
      name: formInputs.name.value,
      genre: formInputs.genre.value,
      release: formInputs.release.value,
    };

    await axios
      .post("http://localhost:8080/movies/createnewmovie", bodyRequest)
      .then((response) => {
        alert("Novo filme inserido!");
        setFormInputs(initialMovieValue);
        console.log(initialMovieValue);
        console.log(formInputs);
        onFormSend(true);
        navigate("/main");
      });
  }

  const validateInputFields = (): boolean => {
    let hasAnyErrors: boolean = false;

    updateErrorField(MovieFields.NAME, isEmpty(formInputs.name.value));

    updateErrorField(MovieFields.GENRE, isEmpty(formInputs.genre.value));

    updateErrorField(MovieFields.RELEASE, isEmpty(formInputs.release.value));

    if (
      isEmpty(formInputs.name.value) ||
      isEmpty(formInputs.genre.value) ||
      isEmpty(formInputs.release.value)
    ) {
      hasAnyErrors = true;
    }

    return !hasAnyErrors;
  };

  const isEmpty = (value: string) => {
    return value.trim().replace(" ", "") === "";
  };

  const updateErrorField = (movieFields: MovieFields, isValid: boolean) => {
    const formInputsCopy = { ...formInputs };
    formInputsCopy[movieFields].error = isValid;
    setFormInputs({ ...formInputsCopy });
  };

  const onMovieChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    movieFields: MovieFields
  ) => {
    const formInputsCopy = { ...formInputs };
    formInputsCopy[movieFields].value = event.currentTarget.value;
    setFormInputs({ ...formInputsCopy });
  };

  return (
    <div className="form">
      <div className="title">
        <h1>Inclusão de Novo Filme</h1>
      </div>

      <form noValidate className="form-indeed">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          name="name"
          onChange={(e) => onMovieChange(e, MovieFields.NAME)}
          value={formInputs.name.value}
          placeholder="Digite o nome do filme!"
          type="text"
        />

        {formInputs.name.error && (
          <span className="error-input">O nome não deve ser nulo.</span>
        )}

        <label htmlFor="genre">Gênero</label>
        <input
          id="genre"
          name="genre"
          onChange={(e) => onMovieChange(e, MovieFields.GENRE)}
          value={formInputs.genre.value}
          placeholder="Digite o gênero do filme!"
          type="text"
        />

        {formInputs.genre.error && (
          <span className="error-input">O gênero não deve ser nulo.</span>
        )}

        <label htmlFor="release">Lançamento</label>
        <input
          id="release"
          name="release"
          onChange={(e) => onMovieChange(e, MovieFields.RELEASE)}
          value={formInputs.release.value}
          placeholder="Digite o ano de lançamento!"
          type="number"
        />

        {formInputs.release.error && (
          <span className="error-input">O lançamento não deve ser nulo.</span>
        )}

        <div className="buttons-of-the-form">
          <Link
            className="form-buttons-return"
            to="/main"
            onClick={() => onFormSend(false)}
          >
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
