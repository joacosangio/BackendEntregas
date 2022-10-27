const http = require ("http");

const server = http.createServer((peticion, respuesta) => {
    respuesta.end("Server creado")
})

const conectarServer = server.listen(8080, () => {
    console.log(`Server conectado en el puerto ${server.address().port}`);
})
