// desestructuración

const mascota40 = {
    'nombre': 'Apolo',
    'edad': 2,
    'raza': 'Terrier',
    'color': 'blanco'
}

// ... -> operador spread
const postres = ['Torta', 'Helado', 'Gelatina']
// const copia = postres // el valor de copia, es una referencia a la variable postres
const copia = [...postres]


copia.push('Flan')

console.log('original', postres)
console.log('copia', copia)

const [postre1, ...resto] = postres

// console.log(postre1)
// console.log(resto)
// console.log(postre3)


// console.log(...postres)

// extraer propiedades de un objeto
const { nombre: nombre_mascota, raza } = mascota40

console.log(nombre_mascota)
console.log(raza)
// console.log(edad)