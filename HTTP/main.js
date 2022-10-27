const http = require("http");
const moment = require("moment");

const server = http.createServer((peticion, respuesta) => {
    const hora = moment(new Date())
    const horas = hora.hours()

    if(horas >= 6 && horas <=12){
        respuesta.end("Buenos dias")
    }else if(horas >= 13 && horas <= 19){
        respuesta.end("Buenas tardes")
    }else if(horas >= 20 && horas <= 22){
        respuesta.end("Buenas noches")
    }else{
        respuesta.end("Hora de acceso no permitida. Vuelve en los horarios correspondientes")
    }
})

const iniciarServer = server.listen("3000", () => {
    console.log(`Server conectado e inicializado con exito en le puerto ${server.address().port} `)
})