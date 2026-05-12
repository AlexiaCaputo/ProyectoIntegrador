import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Peli from "../Peli/Peli";

function PeliCard() {
  let [populares, setPopulares] = useState([]);
  let [cartel, setCartel] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=fa048358caf9c6d86d3611e5961e0b6d")
      .then((response) => response.json())
      .then((data) => {
        setPopulares(data.results);})
      .catch((error) => console.log(error));

    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fa048358caf9c6d86d3611e5961e0b6d")
      .then((response) => response.json())
      .then((data) => {
        setCartel(data.results); })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <h2 className="alert alert-primary">Películas populares</h2>

      <section className="row cards" id="movies">
        {populares.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          populares.filter((pelicula, index) => index < 4).map((pelicula, idx) => (
              <Peli
                key={pelicula.id + idx}
                datos={pelicula}
                tipo="movie" />
            ))
        )}
      </section>

      <Link to="/peliculas/populares">
        <button className="btn btn-primary">
          Ver más de esta sección
        </button>
      </Link>

      <h2 className="alert alert-primary">Películas en cartel</h2>

      <section className="row cards" id="movies">
        {cartel.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          cartel
            .filter((pelicula, index) => index < 4)
            .map((pelicula, idx) => (
              <Peli
                key={pelicula.id + idx}
                datos={pelicula}
                tipo="movie"/>
            ))
        )}
      </section>

      <Link to="/peliculas/cartel">
        <button className="btn btn-primary">
          Ver más de esta sección
        </button>
      </Link>
    </main>
  );
}

export default PeliCard;