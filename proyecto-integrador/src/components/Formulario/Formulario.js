import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: ""
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push("/resultados/" + this.state.busqueda);
  }

  controlarCambios(event) {
    this.setState({
      busqueda: event.target.value
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

        <button type="submit" className="btn btn-success btn-sm">
          Buscar
        </button>
      </form>
    );
  }
}

export default withRouter(Formulario);