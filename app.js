const express = require('express');
const app = express(); 
const port= 3000;

//req-->> request (petición)
//res -->> response (respuesta)

app.get('/', (req,res) => res.send('Llegamos al navegadorr!!')) //----> ruta raíz: localhost:3000

app.get('/contactos',(req,res) => res.send('Página de contacto')) ;
app.get('/productos',(req,res) => res.send('Listado de productos')) ;
app.listen(port, ()=> console.log("Servidor corriendo en el puerto" + port))
