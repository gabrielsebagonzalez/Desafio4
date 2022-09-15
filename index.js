const express = require("express");
const app = express();
const { routerProductos } = require('./routes/routerProductos')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


const Port = 8081;
const server = app.listen(Port, () => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`);
});
server.on("Error", error => console.log(`Error de servidor ${error}`));



app.use('/api/productos', routerProductos)
app.use(express.static("public"));


