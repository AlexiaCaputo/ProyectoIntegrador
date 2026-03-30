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
    const { datos } = this.props;

    return (
      <article className="character-card">
        {datos.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w342${datos.poster_path}`}
            alt={datos.title}
          />
        ) : (
          <p>Sin imagen</p>
        )}

        <h3>{datos.title}</h3>

        <div className={this.state.mostrar ? "visible" : "oculto"}>
          <p>{datos.overview}</p>
        </div>

        <button className="boton-vermas" onClick={this.toggleMostrar}>
          {this.state.mostrar ? "Ver menos" : "Ver más"}
        </button>

        <Link to={`/detalle/${datos.id}`}>
          <button className="boton-vermas">Ir a detalle</button>
        </Link>
      </article>
    );
  }
}

export default Peli;