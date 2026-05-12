import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function Formulario(props) {
  let [busqueda, setBusqueda] = useState("");
  let [tipo, setTipo] = useState("movie");

  function evitarSubmit(event) {
    event.preventDefault();
    props.history.push( "/resultados/" + tipo + "/" + busqueda
    ); }

  function controlarCambios(event) {
    setBusqueda(event.target.value); }

  function elegirPelicula() {
    setTipo("movie"); }

  function elegirSerie() {
    setTipo("tv"); }

  return (
    <form
      className="search-form"
      onSubmit={evitarSubmit} >
      <input
        type="text"
        name="searchData"
        placeholder="Buscar..."
        value={busqueda}
        onChange={controlarCambios} />

      <button
        type="button"
        onClick={elegirPelicula} >
        Películas
      </button>

      <button
        type="button"
        onClick={elegirSerie} >
        Series
      </button>

      <button
        type="submit"
        className="btn btn-success btn-sm" >
        Buscar
      </button>

    </form>
  );
}

export default withRouter(Formulario);