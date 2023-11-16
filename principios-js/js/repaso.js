'use strict' // "obligar" a escribir con buenas practicas

// jsonplaceholder.typicode.com
// fetch('https://jsonplaceholder.typicode.com/users') // retorna una promesa
//     .then(res => {

//         if (res.ok === false) {
//             throw new Error('No se pudo realizar la petición')
//         }

//         return res.json()
//     }) // Response -> el body, status, encabezados, etc
//     .then(info => {

//     })
//     .catch(err => {
//         console.log(err)
//     })

// async / await
let images = []

const getProductos = async () => {
    try {

        //mostrar un icono de carga

        //fetch to fakestoreapi.com
        const res = await fetch('https://fakestoreapi.com/products') // Response

        const info = await res.json() // json

        images = info.map(producto => producto.image)

        const ul = document.querySelector('ul')

        //ocultar el icono de carga

        images.forEach(image => {
            ul.innerHTML += `<li><img src="${image}"></li>`
        })

        console.log(images)
    } catch (err) {
        console.log(err)
    }
}

(() => {
    //su codigo
    getProductos()
})()