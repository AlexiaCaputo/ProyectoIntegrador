import React, { Component } from "react";

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalle: null
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fa048358caf9c6d86d3611e5961e0b6d`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          detalle: data
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    if (this.state.detalle === null) {
      return <h3>Cargando...</h3>;
    }

    return (
      <div>
        <h2 className="alert alert-primary">Detalle de la película</h2>

        <section className="row">
          <article className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${this.state.detalle.poster_path}`}
              alt={this.state.detalle.title}
              className="card-img-top"
            />
          </article>

          <article className="col-md-8">
            <h3>{this.state.detalle.title}</h3>
            <p><strong>Calificación:</strong> {this.state.detalle.vote_average}</p>
            <p><strong>Fecha de estreno:</strong> {this.state.detalle.release_date}</p>
            <p><strong>Duración:</strong> {this.state.detalle.runtime} minutos</p>
            <p><strong>Sinopsis:</strong> {this.state.detalle.overview}</p>
            <p>
              <strong>Géneros:</strong>{" "}
              {this.state.detalle.genres.map((genero, idx) => (
                <span key={idx}>{genero.name} </span>
              ))}
            </p>

            <button className="btn btn-primary">
              Agregar a favoritos
            </button>
          </article>
        </section>
      </div>
    );
  }
}

export default Detalle;