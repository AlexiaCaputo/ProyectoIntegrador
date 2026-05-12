import React, { useState, useEffect } from "react";
import Peli from "../../components/Peli/Peli";

function Resultados(props) {
  let [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/${props.match.params.tipo}?api_key=fa048358caf9c6d86d3611e5961e0b6d&query=${props.match.params.busqueda}` )
      .then((response) => response.json())
      .then((data) => {
        setDatos(data.results); })
      .catch((error) => console.log(error)); }, []);

  return (
    <section className="row cards" id="movies">
      {datos.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        datos.map((dato, idx) => (
          <Peli
            key={dato.id + idx}
            datos={dato}
            tipo={props.match.params.tipo} />
        ))
      )}
    </section>
  );
}

export default Resultados;