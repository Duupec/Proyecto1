import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {
  const [products,setProducts]=useState([]);/* react hook to manage the state of your react components, the default value of productsis an empty array, and when you want to change the value of products
  debes usar setProducts function*/
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  useEffect(()=>{       /*useEffect is a hook that happens when your components, after rendering your components, this function will run only one time*/
    const fetchData = async () => {/* send AJX request to backend and fetch products from there, to send AJX request, we are going to define a function to fetch data*/
    try{ /* if there is an error in fetching data from backend, i set the error message for error hook */
      setLoading(true);
      const {data} =await axios.get('/api/products'); /* array in backend will be transfer to data in frontend */
      setLoading(false);
      setProducts(data); /* seting products to the data that we are getting from backend */
    } catch(err){
      setError(err.message);
      setLoading(false);

    }
  };
    fetchData(); /* llamando a la funcion fetchData */
  },[]);

    return (
    <div>
      {loading?(<LoadingBox></LoadingBox>)
      :
      error?(<MessageBox variant="danger">{error}</MessageBox>)
      :(<div className="row center">
      {products.map((product) => ( /* creo que product es simplemente un objeto que hereda llamando a data.js, a productos especficiamente para hcaer dinamico el cambio de informacion*/
       <Product key={product._id} product={product}></Product> /* Este "products" es la funcion, aca le asignamos los parametros que necesita, que en este caso es toda la lista de productos*/
      ))}
    </div>    
      )}
    </div>
    );
}