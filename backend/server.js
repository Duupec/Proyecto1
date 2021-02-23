import express from 'express';
import data from './data.js'; /* es importante colocar el .js a los archivos */

const app =express();
app.get('/api/products',(req,res)=>{
    res.send(data.products);
});
app.get('/',(req,res)=>{
    res.send('Server is ready');
});
const port = process.env.PORT || 5000; /* Defino un puerto que lee la variable del entorno y si no existe, usar puerto 5000 */
app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);

});