import React, { Component } from "react";

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalle: null,
      esFavorito: false
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/${this.props.match.params.tipo}/${this.props.match.params.id}?api_key=fa048358caf9c6d86d3611e5961e0b6d`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          detalle: data
        });
      })
      .catch((error) => console.log(error));

    let claveStorage =
      this.props.match.params.tipo === "tv"
        ? "favoritosSeries"
        : "favoritosPeliculas";

    let favoritos = localStorage.getItem(claveStorage);

    if (favoritos !== null) {
      favoritos = JSON.parse(favoritos);

      let repetidos = favoritos.filter(
        (item) => item == this.props.match.params.id
      );

      if (repetidos.length > 0) {
        this.setState({
          esFavorito: true
        });
      }
    }
  }

  agregarFavorito = () => {
    let claveStorage =
      this.props.match.params.tipo === "tv"
        ? "favoritosSeries"
        : "favoritosPeliculas";

    let favoritos = localStorage.getItem(claveStorage);

    if (favoritos === null) {
      favoritos = [];
    } else {
      favoritos = JSON.parse(favoritos);
    }

    let repetidos = favoritos.filter(
      (item) => item == this.props.match.params.id
    );

    if (repetidos.length === 0) {
      favoritos.push(this.props.match.params.id);

      localStorage.setItem(claveStorage, JSON.stringify(favoritos));

      this.setState({
        esFavorito: true
      });
    }
  };

  eliminarFavorito = () => {
    let claveStorage =
      this.props.match.params.tipo === "tv"
        ? "favoritosSeries"
        : "favoritosPeliculas";

    let favoritos = localStorage.getItem(claveStorage);

    if (favoritos !== null) {
      favoritos = JSON.parse(favoritos);

      let filtrados = favoritos.filter(
        (item) => item != this.props.match.params.id
      );

      localStorage.setItem(claveStorage, JSON.stringify(filtrados));

      this.setState({
        esFavorito: false
      });
    }
  };

  render() {
    if (this.state.detalle === null) {
      return <h3>Cargando...</h3>;
    }

    return (
      <div>
        <h2 className="alert alert-primary">
          {this.props.match.params.tipo === "movie"
            ? "Detalle de la película"
            : "Detalle de la serie"}
        </h2>

        <section className="row">
          <article className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${this.state.detalle.poster_path}`}
              alt={
                this.state.detalle.title
                  ? this.state.detalle.title
                  : this.state.detalle.name
              }
              className="card-img-top"
            />
          </article>

          <article className="col-md-8">
            <h3>
              {this.state.detalle.title
                ? this.state.detalle.title
                : this.state.detalle.name}
            </h3>

            <p>
              <strong>Calificación:</strong> {this.state.detalle.vote_average}
            </p>

            <p>
              <strong>Fecha de estreno:</strong>{" "}
              {this.state.detalle.release_date
                ? this.state.detalle.release_date
                : this.state.detalle.first_air_date}
            </p>

            {this.props.match.params.tipo === "movie" && (
              <p>
                <strong>Duración: </strong>
                {this.state.detalle.runtime} minutos
              </p>
            )}

            <p>
              <strong>Sinopsis:</strong> {this.state.detalle.overview}
            </p>

            <p>
              <strong>Géneros:</strong>{" "}
              {this.state.detalle.genres.map((genero, idx) => (
                <span key={idx}>{genero.name} </span>
              ))}
            </p>

            {this.state.esFavorito ? (
              <button
                className="btn alert-primary"
                onClick={this.eliminarFavorito}
              >
                ❤️
              </button>
            ) : (
              <button
                className="btn alert-primary"
                onClick={this.agregarFavorito}
              >
                🩶
              </button>
            )}
          </article>
        </section>
      </div>
    );
  }
}

export default Detalle;