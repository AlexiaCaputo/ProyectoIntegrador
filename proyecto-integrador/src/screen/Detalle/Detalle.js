import React, { useState, useEffect } from "react";

function Detalle(props) {
  let [detalle, setDetalle] = useState(null);
  let [esFavorito, setEsFavorito] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${props.match.params.tipo}/${props.match.params.id}?api_key=fa048358caf9c6d86d3611e5961e0b6d` )
      .then((response) => response.json())
      .then((data) => {
        setDetalle(data); })
      .catch((error) => console.log(error));

    let claveStorage =
      props.match.params.tipo === "tv"
        ? "favoritosSeries"
        : "favoritosPeliculas";

    let favoritos = localStorage.getItem(claveStorage);
    if (favoritos !== null) {
      favoritos = JSON.parse(favoritos);

      let repetidos = favoritos.filter(
        (item) => item == props.match.params.id );

      if (repetidos.length > 0) {
        setEsFavorito(true);
      } } }, []);

  function agregarFavorito() {
    let claveStorage =
      props.match.params.tipo === "tv" ? "favoritosSeries" : "favoritosPeliculas";

    let favoritos = localStorage.getItem(claveStorage);

    if (favoritos === null) {
      favoritos = [];
    } else {
      favoritos = JSON.parse(favoritos);
    }

    let repetidos = favoritos.filter(
      (item) => item == props.match.params.id
    );

    if (repetidos.length === 0) {

      favoritos.push(props.match.params.id);

      localStorage.setItem(
        claveStorage,
        JSON.stringify(favoritos)
      );

      setEsFavorito(true);
    }
  }
  function eliminarFavorito() {

    let claveStorage =
      props.match.params.tipo === "tv"
        ? "favoritosSeries"
        : "favoritosPeliculas";

    let favoritos = localStorage.getItem(claveStorage);

    if (favoritos !== null) {
      favoritos = JSON.parse(favoritos);

      let filtrados = favoritos.filter(
        (item) => item != props.match.params.id
      );

      localStorage.setItem(claveStorage, JSON.stringify(filtrados));

      setEsFavorito(false);
    }
  }

  if (detalle === null) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div>
      <h2 className="alert alert-primary">
        {props.match.params.tipo === "movie"? "Detalle de la película" : "Detalle de la serie"}
      </h2>

      <section className="row">
        <article className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${detalle.poster_path}`}
            alt={
              detalle.title ? detalle.title : detalle.name }
            className="card-img-top"/>

        </article>

        <article className="col-md-8">

          <h3> {detalle.title ? detalle.title : detalle.name} </h3>

          <p>
            <strong>Calificación:</strong>{" "} {detalle.vote_average}
          </p>

          <p>
            <strong>Fecha de estreno:</strong>{" "} {detalle.release_date  ? detalle.release_date : detalle.first_air_date}
          </p>

          {props.match.params.tipo === "movie" && (
            <p>
              <strong>Duración:</strong>{" "} {detalle.runtime} minutos
            </p>
          )}

          <p>
            <strong>Sinopsis:</strong>{" "}
            {detalle.overview}
          </p>

          <p>
            <strong>Géneros:</strong>{" "}

            {detalle.genres.map((genero, idx) => (
              <span key={idx}>
                {genero.name}{" "}
              </span> ))}

          </p>

          {esFavorito ? (
            <button
              className="btn alert-primary"
              onClick={eliminarFavorito} >
              ❤️
            </button>
          ) : (
            <button
              className="btn alert-primary"
              onClick={agregarFavorito} >
              🩶
            </button>

          )}

        </article>
      </section>
    </div>
  );
}

export default Detalle;