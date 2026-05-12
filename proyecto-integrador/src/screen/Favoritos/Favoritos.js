import React, { useState, useEffect } from "react";
import Peli from "../../components/Peli/Peli";

function Fav() {
  let [favoritosPeliculas, setFavoritosPeliculas] = useState([]);
  let [favoritosSeries, setFavoritosSeries] = useState([]);

  useEffect(() => {
    let favPeliculas = localStorage.getItem("favoritosPeliculas");
    let favSeries = localStorage.getItem("favoritosSeries");

    if (favPeliculas !== null) {
      favPeliculas = JSON.parse(favPeliculas);
      let peliculas = [];

      favPeliculas.map((id) => {
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=fa048358caf9c6d86d3611e5961e0b6d`
        )
          .then((response) => response.json())
          .then((data) => {peliculas.push(data); setFavoritosPeliculas(peliculas); })
          .catch((error) => console.log(error)); });
    }

    if (favSeries !== null) {
      favSeries = JSON.parse(favSeries);

      let series = [];
      favSeries.map((id) => {
        fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=fa048358caf9c6d86d3611e5961e0b6d` )
          .then((response) => response.json())
          .then((data) => { series.push(data); setFavoritosSeries(series);
          })
          .catch((error) => console.log(error));
      });
    } }, []);

  let actualizarFavPeliculas = (id) => {
    let filtrados = favoritosPeliculas.filter(
      (item) => item.id !== id
    );

    setFavoritosPeliculas(filtrados);
  };

  let actualizarFavSeries = (id) => {
    let filtrados = favoritosSeries.filter(
      (item) => item.id !== id
    );

    setFavoritosSeries(filtrados);
  };

  return (
    <div>
      <h2 className="alert alert-primary">Películas favoritas</h2>

      <section className="row cards">
        {favoritosPeliculas.length === 0 ? (
          <p>No tenés películas favoritas.</p>
        ) : (
          favoritosPeliculas.map((peli, idx) => (
            <Peli
              key={peli.id + idx}
              datos={peli}
              tipo="movie"
              actualizarFav={actualizarFavPeliculas} />
          ))
        )}
      </section>

      <h2 className="alert alert-primary">Series favoritas</h2>

      <section className="row cards">
        {favoritosSeries.length === 0 ? (
          <p>No tenés series favoritas.</p>
        ) : (
          favoritosSeries.map((serie, idx) => (
            <Peli
              key={serie.id + idx}
              datos={serie}
              tipo="tv"
              actualizarFav={actualizarFavSeries} />
          ))
        )}
      </section>
    </div>
  );
}

export default Fav;