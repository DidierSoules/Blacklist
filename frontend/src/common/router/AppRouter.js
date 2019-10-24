import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Productos from './../../views/products/Productos';
import ProductoId from "../../views/productsId/ProductoId";
import Header from "../header/Header";

export function AppRouter() {
  return (
    <Router>
      <Header/>
      <Route path="/products" component={Productos} />
      <Route path="/products/:id" component={ProductoId} />
      <Route render={() => <Redirect to="/products"/>} />
    </Router>
  );
}

export default AppRouter;