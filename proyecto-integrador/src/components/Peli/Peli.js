import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Peli(props) {
  let [mostrar, setMostrar] = useState(false);
  let [esFavorito, setEsFavorito] = useState(false);

  useEffect(() => {
    let claveStorage = props.tipo === "tv" ? "favoritosSeries" : "favoritosPeliculas";

    let favoritos = localStorage.getItem(claveStorage);

    if (favoritos !== null) {
      favoritos = JSON.parse(favoritos);

      let repetidos = favoritos.filter(
        (item) => item === props.datos.id );

      if (repetidos.length > 0) {
        setEsFavorito(true); }}
  }, []);

  const toggleMostrar = () => {
    setMostrar(!mostrar); };

  const agregarFavorito = () => {
    let claveStorage =
      props.tipo === "tv" ? "favoritosSeries" : "favoritosPeliculas";

    let favoritos = localStorage.getItem(claveStorage);

    if (favoritos === null) {
      favoritos = []; } else {
      favoritos = JSON.parse(favoritos); }

    let repetidos = favoritos.filter(
      (item) => item === props.datos.id );

    if (repetidos.length === 0) {
      favoritos.push(props.datos.id);

      localStorage.setItem(claveStorage, JSON.stringify(favoritos) );
      setEsFavorito(true);
    } };

  const eliminarFavorito = () => {
    let claveStorage =
      props.tipo === "tv" ? "favoritosSeries" : "favoritosPeliculas";

    let favoritos = localStorage.getItem(claveStorage);

    if (favoritos !== null) {
      favoritos = JSON.parse(favoritos);

      let filtrados = favoritos.filter(
        (item) => item !== props.datos.id);

      localStorage.setItem( claveStorage, JSON.stringify(filtrados) );

      setEsFavorito(false);

      if (props.actualizarFav) {
        props.actualizarFav(props.datos.id); }
    }
  };

  return (
    <article className="single-card-movie">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w342${props.datos.poster_path}`}
        alt={props.datos.title ? props.datos.title : props.datos.name} />

      <div className="cardBody">
        <h5 className="card-title">
          {props.datos.title ? props.datos.title : props.datos.name}
        </h5>

        <div className={mostrar ? "visible" : "oculto"}>
          <p className="card-text">
            {props.datos.overview}
          </p>
        </div>

        <button
          className="btn btn-primary"
          onClick={toggleMostrar}>
          {mostrar ? "Ver menos" : "Ver descripción"}
        </button>

        <Link
          to={`/detalle/${props.tipo}/${props.datos.id}`}
          className="btn btn-primary" >
          Ir a detalle
        </Link>

        {esFavorito ? (
          <button
            className="btn alert-primary"
            onClick={eliminarFavorito} >
            ❤️
          </button>
        ) : (
          <button
            className="btn alert-primary"
            onClick={agregarFavorito}
          >
            🩶
          </button>
        )}
      </div>
    </article>
  );
}

export default Peli;