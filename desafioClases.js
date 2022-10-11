class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }


obtenerNombreCompleto() {
    return `El nombre completo del usuario es: ${this.nombre} ${this.apellido}`
}

aniadirMascota(mascota) {
    this.mascotas.push(mascota)
    return this.mascotas
}

contadorMascotas() {
    return `El usuario tiene: ${this.mascotas.length} mascotas` 
}

aniadirLibro(autor, nombreLibro) {
    this.libros.push({autor: autor, nombre : nombreLibro })  
    return `Los libros del usuario son:${this.libros}`
}

nombreDeLibros() {
    return `Los nombres de los libros son: ${[this.libros.nombre]}`
}
}
const usuario = new Usuario ("Juan", "Perez")

console.log(usuario.obtenerNombreCompleto())
console.log(usuario.aniadirMascota("Percy"))
console.log(usuario.contadorMascotas())
console.log(usuario.aniadirLibro("Juan", "Harry Postre", "Jose"))
console.log(usuario.nombreDeLibros())
