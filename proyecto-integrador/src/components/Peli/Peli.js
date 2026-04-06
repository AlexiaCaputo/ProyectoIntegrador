import React, { Component } from "react";
import { Link } from "react-router-dom";

class Peli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar: false
    };
  }

  toggleMostrar = () => {
    this.setState({
      mostrar: !this.state.mostrar
    });
  };

  render() {
    return (
      <article className="single-card-movie">

        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w342${this.props.datos.poster_path}`} alt={this.props.datos.title} />

        <div className="cardBody">
          <h5 className="card-title">{this.props.datos.title}</h5>

          <div className={this.state.mostrar ? "visible" : "oculto"}>
            <p className="card-text">{this.props.datos.overview}</p>
          </div>

          <button className="btn btn-primary" onClick={this.toggleMostrar}>
            {this.state.mostrar ? "Ver menos" : "Ver descripción"}
          </button>

          <Link to={`/detalle/${this.props.datos.id}`} className="btn btn-primary">
            Ir a detalle
          </Link>

          <button className="btn alert-primary">🩶</button>
        </div>
      </article>
    );
  }
}

export default Peli;