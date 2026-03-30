function Resultados(props) {
  return (
    <div>
      <h1>Resultados</h1>
      <p>{props.match.params.busqueda}</p>
    </div>
  );
}

export default Resultados;