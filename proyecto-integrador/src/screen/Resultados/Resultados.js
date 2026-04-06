import { Component } from "react";
import Peli from "../../components/Peli/Peli";

class Resultados extends Component{
  constructor(props){
      super(props)
      this.state={
          datos: []
      }
  }
  componentDidMount(){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=fa048358caf9c6d86d3611e5961e0b6d&query=${this.props.match.params.busqueda}`)
          .then(response => response.json())
          .then(data=> this.setState(
              {datos: data.results}
          ))
          .catch(error => console.log(error))
  }
  render(){
      return(
          <section className="row cards" id="movies">
          {this.state.datos.length === 0?
          <h3>Cargando...</h3> :
          this.state.datos.map((datos,idx) => <Peli key={datos.id} datos={datos}/>)}
         </section>
      )
  }
}

export default Resultados