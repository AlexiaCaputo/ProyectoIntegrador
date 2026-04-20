import React, { Component } from "react";
import Peli from "../../components/Peli/Peli";

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      busqueda: ""
    };
  }

  componentDidMount() {
    let url = "";
    if (this.props.match.params.tipo === "populares") {
      url =
        "https://api.themoviedb.org/3/movie/popular?api_key=fa048358caf9c6d86d3611e5961e0b6d";
    } else if (this.props.match.params.tipo === "cartel") {
      url =
        "https://api.themoviedb.org/3/movie/now_playing?api_key=fa048358caf9c6d86d3611e5961e0b6d";
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peliculas: data.results });
      })
      .catch((error) => console.log(error));
  }

  controlarCambios(event) {
    this.setState({
      busqueda: event.target.value
    });
  }

  render() {
    let peliculasFiltradas = this.state.peliculas.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(this.state.busqueda.toLowerCase())
    );

    return (
      <div>
        <h2 className="alert alert-primary">
          {this.props.match.params.tipo === "populares"
            ? "Películas populares"
            : "Películas en cartel"}
        </h2>

        <form className="search-form">
          <input
            type="text"
            placeholder="Filtrar películas..."
            value={this.state.busqueda}
            onChange={(event) => this.controlarCambios(event)}
          />
        </form>

        <section className="row cards" id="movies">
          {this.state.peliculas.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            peliculasFiltradas.map((pelicula, idx) => (
              <Peli key={pelicula.id + idx} datos={pelicula} tipo="movie" />
            ))
          )}
        </section>
      </div>
    );
  }
}

export default Peliculas;