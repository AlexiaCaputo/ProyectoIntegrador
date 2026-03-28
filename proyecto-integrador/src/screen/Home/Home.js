import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: ""
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState({
      busqueda: event.target.value
    });
  }

  render() {
    return (
      <main>
        <form onSubmit={(event) => this.evitarSubmit(event)}>
          <input
            type="text"
            value={this.state.busqueda}
            onChange={(event) => this.controlarCambios(event)}
          />
          <input type="submit" value="Buscar" />
        </form>

        <section>
          <h2>Películas populares</h2>
        </section>

        <section>
          <h2>Películas en cartel</h2>
        </section>
      </main>
    );
  }
}

export default Home;