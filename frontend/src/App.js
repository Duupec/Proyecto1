import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className="grid-container">  
      <header className="row">
        
        <div>
          <a className="brand" href="/">Luz</a> 
        </div>
        
        <div>
          <a href="/cart">Carrito</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
       <div className="row center">
         {
           data.products.map(product =>( /* creo que product es simplemente un objeto que hereda llamando a data.js, a productos especficiamente para hcaer dinamico el cambio de informacion*/
            <Product key={product.__id} product={product}> </Product>
           ))
         }
       </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>

  );
}

export default App;
