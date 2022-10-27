const express = require("express");
const Contenedor = require("../desafio2");

const app = express();

const PUERTO = 8080;

let contenedor = new Contenedor("productos.txt")




app.get("/productos", async (req, res) => {
    const mostrarProductos = await contenedor.getAll();
    res.json(mostrarProductos)
})

app.get("/productoRandom", (req, res) => {
    const prodRandom = Math.random() * 20
})


const conexionServidor = app.listen(PUERTO, () => {
    console.log(`La conexión con el servidor fue establecida en el puerto ${conexionServidor.address().port}`)
})