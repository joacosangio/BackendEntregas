const fs = require("fs");

class Contenedor {
    constructor(archivo){

        this.archivo = archivo;

    }

    save = async(producto) => {

        try {
            if (fs.existsSync(this.archivo)) {
                
                let info = await fs.promises.readFile(this.archivo, "utf-8");

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

}

let contenedor = new Contenedor

