import React, { Component } from "react";
import Peli from "../../components/Peli/Peli";

class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritosPeliculas: [],
      favoritosSeries: []
    };
  }

  componentDidMount() {
    let favoritosPeliculas = localStorage.getItem("favoritosPeliculas");
    let favoritosSeries = localStorage.getItem("favoritosSeries");

    if (favoritosPeliculas !== null) {
      favoritosPeliculas = JSON.parse(favoritosPeliculas);

      let peliculas = [];

      favoritosPeliculas.map((id) => {
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=fa048358caf9c6d86d3611e5961e0b6d`)
          .then((response) => response.json())
          .then((data) => {
            peliculas.push(data);
            this.setState({
              favoritosPeliculas: peliculas
            });
          })
          .catch((error) => console.log(error));
      });
    }

    if (favoritosSeries !== null) {
      favoritosSeries = JSON.parse(favoritosSeries);

      let series = [];

      favoritosSeries.map((id) => {
        fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=fa048358caf9c6d86d3611e5961e0b6d`)
          .then((response) => response.json())
          .then((data) => {
            series.push(data);
            this.setState({
              favoritosSeries: series
            });
          })
          .catch((error) => console.log(error));
      });
    }
  }

  actualizarFavPeliculas = (id) => {
    let filtrados = this.state.favoritosPeliculas.filter(
      (item) => item.id !== id
    );

    this.setState({
      favoritosPeliculas: filtrados
    });
  };

  actualizarFavSeries = (id) => {
    let filtrados = this.state.favoritosSeries.filter(
      (item) => item.id !== id
    );

    this.setState({
      favoritosSeries: filtrados
    });
  };

  render() {
    return (
      <div>
        <h2 className="alert alert-primary">Películas favoritas</h2>

        <section className="row cards">
          {this.state.favoritosPeliculas.length === 0 ? (
            <p>No tenés películas favoritas.</p>
          ) : (
            this.state.favoritosPeliculas.map((peli, idx) => (
              <Peli
                key={peli.id + idx}
                datos={peli}
                tipo="movie"
                actualizarFav={this.actualizarFavPeliculas} />
            ))
          )}
        </section>

        <h2 className="alert alert-primary">Series favoritas</h2>

        <section className="row cards">
          {this.state.favoritosSeries.length === 0 ? (
            <p>No tenés series favoritas.</p>
          ) : (
            this.state.favoritosSeries.map((serie, idx) => (
              <Peli
                key={serie.id + idx}
                datos={serie}
                tipo="tv"
                actualizarFav={this.actualizarFavSeries}  />
            ))
          )}
        </section>
      </div>
    );
  }
}

export default Fav;