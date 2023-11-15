const postres = ['pie de limon', 'torta de chocolate', 'torta de queso', 'torta de fresa', 'torta de manzana', 'torta de piña', 'torta de coco']

// ciclo for, while, do while

// for (let i = 0; i < postres.length; i++) { 
//     console.log(postres[i]);
// }


//ejecutar la funcion
mostrarPostre()

// declaracion de la funcion
function mostrarPostre(postre, index) {
    // console.log(this) // TODO: this es el objeto global
    // alert('Hola mundo')
    console.log(index, postre)
}

// funcion de flecha

const mostrarPostre2 = (postre, index) => {
    console.log(index, postre)
}

// postres.forEach((postre, index) => {
//     console.log(index, postre)
// })

// for( const [index, postre] of postres){
//     console.log(postre)
// }

// postres.forEach(mostrarPostre)
// postres.forEach(mostrarPostre2)


const calcularPrecioOld = (tipo_compra, monto, desc, isv = 0.15) => {
    const subtotal = monto - desc
    const impuesto = subtotal * isv
    return subtotal + impuesto
}

const calcularPrecio = ({ monto, desc, isv = 0.15 }) => {
    const subtotal = monto - desc
    const impuesto = subtotal * isv
    return subtotal + impuesto
}

// const monto = 100
// const desc = 10
// const isv = 0.18

// const data = {
//     monto: 100,
//     desc: 10,
//     isv: 0.18,
//     precio_especial: 90
// }


console.log(calcularPrecio({ desc: 10, monto: 100, isv: 0.18 }))
// console.log(calcularPrecioOld(100, 10, 0.18))