import React from 'react';
import Product from '../components/Product';
import data from '../data';

export default function HomeScreen() {
    return (
    <div>
    <div className="row center">
      {data.products.map((product) => ( /* creo que product es simplemente un objeto que hereda llamando a data.js, a productos especficiamente para hcaer dinamico el cambio de informacion*/
       <Product key={product._id} product={product}></Product> /* Este "products" es la funcion, aca le asignamos los parametros que necesita, que en este caso es toda la lista de productos*/
      ))}
    </div>
    </div>
    );
}