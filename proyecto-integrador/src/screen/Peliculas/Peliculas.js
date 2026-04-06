import React, { Component } from "react";
import Peli from "../../components/Peli/Peli";

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    let url = "";
    if (this.props.match.params.tipo === "populares") {
      url = "https://api.themoviedb.org/3/movie/popular?api_key=fa048358caf9c6d86d3611e5961e0b6d";
    } else if (this.props.match.params.tipo === "cartel") {
      url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fa048358caf9c6d86d3611e5961e0b6d";
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peliculas: data.results
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h2 className="alert alert-primary">
          {this.props.match.params.tipo === "populares" ? "Películas populares" : "Películas en cartel"}
        </h2>

        <section className="row cards" id="movies">
          {this.state.peliculas.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            this.state.peliculas.map((pelicula, idx) => (
              <Peli key={pelicula.id + idx} datos={pelicula} />
            ))
          )}
        </section>
      </div>
    );
  }
}

export default Peliculas;