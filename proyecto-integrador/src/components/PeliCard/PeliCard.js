import React, { Component } from "react";
import { Link } from "react-router-dom";
import Peli from "../Peli/Peli";

class PeliCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populares: [],
      cartel: []
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=fa048358caf9c6d86d3611e5961e0b6d")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ populares: data.results });
      })
      .catch((error) => console.log(error));

    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fa048358caf9c6d86d3611e5961e0b6d")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cartel: data.results });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <main>
        <section>
          <h2>Películas más populares</h2>
          <div className="card-container">
            {this.state.populares.length === 0 ? (
              <p>Cargando...</p>
            ) : (
              this.state.populares.slice(0, 4).map((pelicula) => (
                <Peli key={pelicula.id} datos={pelicula} />
              ))
            )}
          </div>

          <Link to="/peliculas">
            <button className="boton-vermas">Ver más de esta sección</button>
          </Link>
        </section>

        <section>
          <h2>Películas en cartel</h2>
          <div className="card-container">
            {this.state.cartel.length === 0 ? (
              <p>Cargando...</p>
            ) : (
              this.state.cartel.slice(0, 4).map((pelicula) => (
                <Peli key={pelicula.id} datos={pelicula} />
              ))
            )}
          </div>

          <Link to="/cartel">
            <button className="boton-vermas">Ver más de esta sección</button>
          </Link>
        </section>
      </main>
    );
  }
}

export default PeliCard;