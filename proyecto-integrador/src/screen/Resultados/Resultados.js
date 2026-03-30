function Resultados() {
  return (
    <div>
        <h1>Resultados</h1>
        {this.props.match.params.busqueda}
    </div>
  );
}

export default Resultados;