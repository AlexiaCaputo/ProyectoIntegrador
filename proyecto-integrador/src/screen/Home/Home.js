import React, { Component } from "react";
import Formulario from "../../components/Formulario/Formulario";
import PeliCard from "../../components/PeliCard/PeliCard";


class Home extends Component {

  render() {
    return (
      <main>
        <Formulario/>
        <PeliCard/>
      </main>
    );
  }
}

export default Home;