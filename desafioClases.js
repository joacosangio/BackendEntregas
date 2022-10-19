class Usuario {
    constructor(nombre, apellido,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros =  []
        this.mascotas = mascotas || []
    }


obtenerNombreCompleto() {
    return `El nombre completo del usuario es: ${this.nombre} ${this.apellido}`
}

aniadirMascota(mascota) {
    this.mascotas.push(mascota)
}

contadorMascotas() {
    return `El usuario tiene: ${this.mascotas.length} mascotas, que son: ${this.mascotas}` 
}

aniadirLibro(nombre, autor) {

    this.libros.push({nombre, autor})  
}

nombreDeLibros() {
    console.log(`Los nombres de los libros son: ${this.libros.map( libro => libro.nombre )}`)
}

autorDeLibros() {
    console.log(`Los autores de los libros son:${this.libros.map( libro => libro.autor )} `)
}
}
const usuario = new Usuario ("Juan", "Perez")

console.log(usuario.obtenerNombreCompleto())
usuario.aniadirMascota("Percy")
usuario.aniadirMascota("Aimi")
console.log(usuario.contadorMascotas())
usuario.aniadirLibro("Harry Postre", "Juan" )
usuario.aniadirLibro("El anillo de los señores" ,"Jose" )
usuario.nombreDeLibros()
usuario.autorDeLibros()



