//    * CONSUMIR INFORMACIÓN DE UN SERVICIO WEB

//API: Application Programming Interface

// ? Verbos HTTP
// * GET: Obtener datos
// * POST: Crear datos
// * PUT: Actualizar datos -> modificar o reemplazar "todos" los datos
// * PATCH: Actualizar datos -> modificar o reemplazar "algunos" datos
// * DELETE: Eliminar datos

// ? codigos de estado HTTP
// ? 100 - 199: informativos
// * 200 - 299: OK
// * 300 - 399: Redirecciones
// ! 400 - 499: Errores del cliente
// ! 500 - 599: Errores del servidor


// ? una solicitud HTTP, con el verbo GET
// * retorna una promesa ( Response )

// asignar al documento el evento DOMContentLoaded
// * se ejecuta cuando el documento HTML ha sido completamente cargado y parseado
// document.addEventListener('DOMContentLoaded', () => {

function getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (!response.ok) {
                ///generar un error
                throw Error(response.status + ' ' + response.statusText)
            }
            return response.json() // * retorna una promesa
        })
        .then((data) => {
            console.log(data)




        }).catch((error) => {
            console.log(error)
        })
}

// const boton_datos = document.getElementById('btnGetData')
const cargarDatos = document.querySelector('#btnGetData')
const lista = document.querySelector('#lista')
// const botones = document.querySelectorAll('button')


// asignar un evento al boton
cargarDatos.addEventListener('click', getData)

// })
