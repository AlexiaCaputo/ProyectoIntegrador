import React, { Component } from "react";

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      populares: [],
      cartel: []
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=fa048358caf9c6d86d3611e5961e0b6d")
      .then((response) => response.json())
      .then((data) => {
        this.setState({populares: data.results});
      })
      .catch((error) => console.log(error));
  
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=fa048358caf9c6d86d3611e5961e0b6d")
      .then((response) => response.json())
      .then((data) => {
        this.setState({cartel: data.results});
      })
      .catch((error) => console.log(error));
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
        <form className="input-busqueda" onSubmit={(event) => this.evitarSubmit(event)}>
          <input
            type="text"
            value={this.state.busqueda}
            onChange={(event) => this.controlarCambios(event)}
          />
          <input type="submit" value="Buscar" />
        </form>

        <section>
          <h2>Películas más populares</h2>
          <div className="card-container">
          {this.state.populares.slice(0, 4).map((pelicula) => (
            <article className="character-card" key={pelicula.id}>
              <img src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`} alt={pelicula.title} />
              <h3>{pelicula.title}</h3>
            </article>
          ))}
          </div>
        </section>

        <section>
          <h2>Películas en cartel</h2>
          <div className="card-container">
          {this.state.cartel.slice(0, 4).map((pelicula) => (
            <article className="character-card" key={pelicula.id}>
              <img src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`} alt={pelicula.title} />
              <h3>{pelicula.title}</h3>
            </article>
          ))}
          </div>
        </section>
      </main>
    );
  }
}

export default Home;