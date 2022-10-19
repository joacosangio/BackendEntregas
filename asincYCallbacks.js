const mostrarLetras = (string, callback) => {
    let counter = 0
    const interval = setInterval(() => {
        console.log(string[counter])
        counter++
        if (counter >= string.length) {
            callback()
            clearInterval(interval)
        }
    }, 1000)
}

const termine = () => console.log("Terminé")

mostrarLetras("Hola puto", termine)