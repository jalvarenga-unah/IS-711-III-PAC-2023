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

postres.forEach(mostrarPostre)
postres.forEach(mostrarPostre2)