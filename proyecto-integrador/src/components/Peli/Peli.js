import React, { Component } from "react";
import { Link } from "react-router-dom";

class Peli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar: false,
      esFavorito: false
    };
  }

  componentDidMount() {
    let claveStorage =
      this.props.tipo === "tv" ? "favoritosSeries" : "favoritosPeliculas";
    let favoritos = localStorage.getItem(claveStorage);
    if (favoritos !== null) {
      favoritos = JSON.parse(favoritos);
      let repetidos = favoritos.filter(
        (item) => item === this.props.datos.id
      );
      if (repetidos.length > 0) {
        this.setState({
          esFavorito: true
        });
      }
    }
  }

  toggleMostrar = () => {
    this.setState({
      mostrar: !this.state.mostrar
    });
  };

  agregarFavorito = () => {
    let claveStorage =
      this.props.tipo === "tv" ? "favoritosSeries" : "favoritosPeliculas";
    let favoritos = localStorage.getItem(claveStorage);
    if (favoritos === null) {
      favoritos = [];
    } else {
      favoritos = JSON.parse(favoritos);
    }
    let repetidos = favoritos.filter(
      (item) => item === this.props.datos.id
    );

    if (repetidos.length === 0) {
      favoritos.push(this.props.datos.id);
      localStorage.setItem(claveStorage, JSON.stringify(favoritos));
      this.setState({
        esFavorito: true
      });
    }
  };

  eliminarFavorito = () => {
    let claveStorage =
      this.props.tipo === "tv" ? "favoritosSeries" : "favoritosPeliculas";
    let favoritos = localStorage.getItem(claveStorage);
    if (favoritos !== null) {
      favoritos = JSON.parse(favoritos);
      let filtrados = favoritos.filter(
        (item) => item !== this.props.datos.id
      );
      localStorage.setItem(claveStorage, JSON.stringify(filtrados));
      this.setState({
        esFavorito: false
      });
      if (this.props.actualizarFav) {
        this.props.actualizarFav(this.props.datos.id);
      }
    }
  };

  render() {
    return (
      <article className="single-card-movie">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w342${this.props.datos.poster_path}`}
          alt={this.props.datos.title ? this.props.datos.title : this.props.datos.name} />

        <div className="cardBody">
          <h5 className="card-title">
            {this.props.datos.title ? this.props.datos.title : this.props.datos.name}
          </h5>

          <div className={this.state.mostrar ? "visible" : "oculto"}>
            <p className="card-text">{this.props.datos.overview}</p>
          </div>

          <button className="btn btn-primary" onClick={this.toggleMostrar}>
            {this.state.mostrar ? "Ver menos" : "Ver descripción"}
          </button>

          <Link to={`/detalle/${this.props.tipo}/${this.props.datos.id}`} className="btn btn-primary">
            Ir a detalle
          </Link>

          {this.state.esFavorito ? (
            <button className="btn alert-primary" onClick={this.eliminarFavorito}>
              ❤️
            </button>
          ) : (
            <button className="btn alert-primary" onClick={this.agregarFavorito}>
              🩶
            </button>
          )}
        </div>
      </article>
    );
  }
}

export default Peli;