import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screen/Home/Home';
import Login from './screen/Login/Login';
import Detalle from './screen/Detalle/Detalle';
import Fav from './screen/Favoritos/Favoritos';
import Resultados from './screen/Resultados/Resultados';
import NotFound from './screen/NotFound/NotFound';
import Crear from './screen/CrearCuenta/CrearCuenta';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Peliculas from './screen/Peliculas/Peliculas';



function App() {
  return (
    <body className="container">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Crear} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/detalle/:id" component={Detalle} />
        <Route path="/favoritos" component={Fav} />
        <Route path="/search/:busqueda" component={Resultados} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </body>
  );   
}
export default App;
