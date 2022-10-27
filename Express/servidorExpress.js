const express = require("express");
const moment = require("moment");

const app = express();

const PUERTO = 8080;
let visitas = 0;

app.get ("/", (req, res) => {
    res.send(`<h1 style= "color:blue">Bienvendos al servidor express<h1>`)
})

app.get ("/visitas", (req, res) => {
    visitas++;
    res.send(`La cantidad de visitas es: ${visitas}`)
})

app.get ("/fyh", (req, res) => {
    let fecha = moment(new Date())
    let horas = fecha.format("DD/MM/yyyy HH:MM:SS")
    res.send({fyh: horas})
})

const conexionServidor = app.listen(PUERTO, () => {
    console.log(`La conexión con el servidor fue establecida en el puerto ${conexionServidor.address().port}`)
})

