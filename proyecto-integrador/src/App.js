import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screen/Home/Home';
import Login from './screen/Login/Login';
import Detalle from './screen/Detalle/Detalle';
import Fav from './screen/Favoritos/Favoritos';
import Resultados from './screen/Resultados/Resultados';
import NotFound from './screen/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Peliculas from './screen/Peliculas/Peliculas';
import CrearCuenta from './screen/CrearCuenta/CrearCuenta';



function App() {
  return (
    <div className="container">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={CrearCuenta} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/detalle/:id" component={Detalle} />
        <Route path="/favoritos" component={Fav} />
        <Route path="/resultados/:busqueda" component={Resultados} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );   
}
export default App;
