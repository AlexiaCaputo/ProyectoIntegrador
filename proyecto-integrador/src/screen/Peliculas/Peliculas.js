import React, { useState, useEffect } from "react";
import Peli from "../../components/Peli/Peli";

function Peliculas(props) {
  let [peliculas, setPeliculas] = useState([]);
  let [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    let url = "";
    if (props.match.params.tipo === "populares") {
      url = "https://api.themoviedb.org/3/movie/popular?api_key=fa048358caf9c6d86d3611e5961e0b6d";
    } else if (props.match.params.tipo === "cartel") {
      url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fa048358caf9c6d86d3611e5961e0b6d";
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.results); })
      .catch((error) => console.log(error)); }, []);

  function controlarCambios(event) { setBusqueda(event.target.value); }

  let peliculasFiltradas = peliculas.filter((pelicula) => pelicula.title.toLowerCase().includes(busqueda.toLowerCase()) );

  return (
    <div>
      <h2 className="alert alert-primary">
        {props.match.params.tipo === "populares" ? "Películas populares" : "Películas en cartel"}
      </h2>

      <form className="search-form">
        <input
          type="text"
          placeholder="Filtrar películas..."
          value={busqueda}
          onChange={controlarCambios} />

      </form>

      <section className="row cards" id="movies">
        {peliculas.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          peliculasFiltradas.map((pelicula, idx) => (
            <Peli
              key={pelicula.id + idx}
              datos={pelicula}
              tipo="movie"/>
          ))
        )}
      </section>
    </div>
  );
}

export default Peliculas;