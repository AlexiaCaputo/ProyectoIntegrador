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
        className="input-busqueda"
        onSubmit={(event) => this.evitarSubmit(event)}
      >
        <input
          type="text"
          value={this.state.busqueda}
          onChange={(event) => this.controlarCambios(event)}
          placeholder="Buscar película..."
        />
        <input type="submit" value="Buscar" />
      </form>
    );
  }
}

export default withRouter(Formulario);