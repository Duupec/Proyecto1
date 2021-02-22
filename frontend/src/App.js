import data from './data';

function App() {
  return (
    <div className="grid-container">  
      <header className="row">
        
        <div>
          <a className="brand" href="/">Proyecto</a> 
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
            <div key={product.__id}className="card">
            <a href={`/product/${product.__id}`}> 
                <img className="medium" src={product.image} alt={product.name}/> 
            </a>

            <div className="card-body">
                <a href={`/product/${product.__id}`}> 
                    <h2>{product.name}</h2>
                </a>
                <div className="rating">
                 <span><i className="fa fa-star"></i></span>
                 <span><i className="fa fa-star"></i></span>
                 <span><i className="fa fa-star"></i></span>
                 <span><i className="fa fa-star"></i></span>
                 <span><i className="fa fa-star"></i></span>
                </div>
                <div className="price">${product.price}</div>
            </div>
        </div>
           ))
         }
           
       </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>

  );
}

export default App;
