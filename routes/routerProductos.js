const express = require("express");
const routerProductos = express.Router();
const { Contenedor }  = require('../contenedor/contenedor')
const contenedor = new Contenedor

routerProductos.get('/', async(req, res) => {
    const productos = await contenedor.getAll();
    res.json(productos)
})

routerProductos.get("/:id", async (req, res) => {
    if (!Number.isNaN(req.params.id)) {
        const producto = await contenedor.getById(req.params.id);
        res.json(producto ?? { error: "producto no encontrado" });
    } else {
        res.json({ error: "el parametro no es un numero" });
    }
});

routerProductos.post('/', async(req, res) => {

})

routerProductos.put('/', async(req, res) => {

})

routerProductos.delete('/', async(req, res) => {

})


module.exports = { routerProductos };