const fs = require("fs");
const { resourceLimits } = require("worker_threads");

class Contenedor {
    constructor(archivo){

        this.archivo = archivo;

    }

    save = async(producto) => {

        try {
            if (fs.existsSync(this.archivo)) {
                
                let info = await fs.promises.readFile(this.archivo, "utf-8");
                let result = JSON.parse(info)

                    if (result.length > 0) {

                        let lastId = result[result.length-1].id+1;
                        let productoNuevo = {
                            id: lastId,
                            ...producto
                        }

                        result.push(productoNuevo);
                        await fs.promises.writeFile(this.archivo, JSON.stringify(result, null, 2));
                        return lastId;

                    }else {
                        let lastId = 1
                        let productoNuevo = {
                            id : lastId,
                            ...producto
                    }

                    result.push(productoNuevo)

                    await fs.promises.writeFile(this.archivo, JSON.stringify(result, null, 2));
                    return lastId;

                }

            } else {

            let productoNuevo = {
            
                id: 1,
                ...producto

            }
            await fs.promises.writeFile(this.archivo, JSON.stringify([productoNuevo], null, 2));
            return 1;
            }

        } catch (error) {
            console.log(error)
        }

    }

getAll = async() => {
    try {

        if (fs.existsSync(this.archivo)){
            let info = await fs.promises.readFile(this.archivo, "utf-8");
            let result = JSON.parse(info)
                if (result.length > 0){
                    return result;
                }else{
                    return "No hay productos en el contenedor"
                }
        }else {
            return "No hay un archivo creado =("
        }
        
    } catch (error) {
        console.log(error)
    }
}

getById = async(id) => {

    
    try {
        if (fs.existsSync(this.archivo)){
            let info = await fs.promises.readFile(this.archivo, "utf-8");
            let result = JSON.parse(info)
            const infoId = result.filter(producto => producto.id === id) 
            console.log("Se encontró el siguiente producto")
            return infoId
                
        }
    } catch (error) {
        console.log(error)
    }
    
}

deleteAll = async() => {

    if (fs.existsSync(this.archivo)){
        let info = await fs.promises.readFile(this.archivo, "utf-8");
        let result = JSON.parse(info)

        console.log("Se borraron todos los datos del archivo")
        return result = []
        
    }

}

deleteById = async (id) =>{
    try {

        if (fs.existsSync(this.archivo)){
            let info = await fs.promises.readFile(this.archivo, "utf-8");
            let result = JSON.parse(info)
            if(result.some(producto => producto.id === id)){
                const eliminando = result.filter(producto => producto.id !== id)
                await fs.promises.writeFile(this.archivo, eliminando)
                console.log("Producto eliminado")
                return result
                
            }

        }
        
    } catch (error) {
        console.log(error)
    }
}

}

let contenedor = new Contenedor("productos.txt")

metodos = async() => {

console.log(await contenedor.save({title: "Café", price: 123, thumbnail: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs1.eestatic.com%2F2017%2F02%2F13%2Fcocinillas%2Fcocinillas_193495389_116293001_1706x960.jpg&imgrefurl=https%3A%2F%2Fwww.elespanol.com%2Fcocinillas%2Frecetas%2Fbebidas%2F20171006%2Fhacer-cafe-perfecto-ciencia%2F1001008949096_30.html&tbnid=EjkHHh0zSoVDkM&vet=12ahUKEwjQgvLZw-36AhUSu5UCHezECjQQMygBegUIARDjAQ..i&docid=KsYYB05ZfJwBBM&w=1706&h=960&q=cafe&client=firefox-b-lm&ved=2ahUKEwjQgvLZw-36AhUSu5UCHezECjQQMygBegUIARDjAQ"}))

console.log(await contenedor.save({title: "Cafetera", price: 678, thumbnail: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs1.eestatic.com%2F2017%2F02%2F13%2Fcocinillas%2Fcocinillas_193495389_116293001_1706x960.jpg&imgrefurl=https%3A%2F%2Fwww.elespanol.com%2Fcocinillas%2Frecetas%2Fbebidas%2F20171006%2Fhacer-cafe-perfecto-ciencia%2F1001008949096_30.html&tbnid=EjkHHh0zSoVDkM&vet=12ahUKEwjQgvLZw-36AhUSu5UCHezECjQQMygBegUIARDjAQ..i&docid=KsYYB05ZfJwBBM&w=1706&h=960&q=cafe&client=firefox-b-lm&ved=2ahUKEwjQgvLZw-36AhUSu5UCHezECjQQMygBegUIARDjAQ"}))
    
console.log(await contenedor.save({title: "Capsula de café", price: 456, thumbnail: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs1.eestatic.com%2F2017%2F02%2F13%2Fcocinillas%2Fcocinillas_193495389_116293001_1706x960.jpg&imgrefurl=https%3A%2F%2Fwww.elespanol.com%2Fcocinillas%2Frecetas%2Fbebidas%2F20171006%2Fhacer-cafe-perfecto-ciencia%2F1001008949096_30.html&tbnid=EjkHHh0zSoVDkM&vet=12ahUKEwjQgvLZw-36AhUSu5UCHezECjQQMygBegUIARDjAQ..i&docid=KsYYB05ZfJwBBM&w=1706&h=960&q=cafe&client=firefox-b-lm&ved=2ahUKEwjQgvLZw-36AhUSu5UCHezECjQQMygBegUIARDjAQ"}))
    
console.log(await contenedor.getAll())

console.log(await contenedor.getById(2))

console.log(await contenedor.deleteAll())

console.log(await contenedor.deleteById(1))
}

metodos()
