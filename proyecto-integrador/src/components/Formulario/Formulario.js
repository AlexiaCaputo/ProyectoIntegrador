import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      tipo: "movie"
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push("/resultados/" + this.state.tipo + "/" + this.state.busqueda);
  }

  controlarCambios(event) {
    this.setState({
      busqueda: event.target.value
    });
  }

  elegirPelicula() {
    this.setState({
      tipo: "movie"
    });
  }

  elegirSerie() {
    this.setState({
      tipo: "tv"
    });
  }

  render() {
    return (
      <form
        className="search-form"
        onSubmit={(event) => this.evitarSubmit(event)}
        >
        <input
          type="text"
          name="searchData"
          placeholder="Buscar..."
          value={this.state.busqueda}
          onChange={(event) => this.controlarCambios(event)}
           />

        <button
          type="button"
          onClick={() => this.elegirPelicula()}>
          Películas
        </button>

        <button
          type="button"
          onClick={() => this.elegirSerie()}>
          Series
        </button>

        <button type="submit" className="btn btn-success btn-sm">
          Buscar
        </button>
      </form>
    );
  }
}

export default withRouter(Formulario);