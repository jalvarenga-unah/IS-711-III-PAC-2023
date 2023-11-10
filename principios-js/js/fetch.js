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

            // ul
            // const ul = document.querySelector('#resultados')
            const ul = document.createElement('ul')
            const section = document.querySelector('section')

            section.appendChild(ul)

            data.forEach(user => {

                const li = document.createElement('li')
                const { name, email } = user

                li.textContent = `${name} - ${email}` // * template string

                ul.appendChild(li)

            });

        }).catch((error) => {
            console.log(error)
        })
}


//definiendo una función asíncrona
async function getInfo() {

    try {
        // resolvemos la promesa, y detiene la ejecución de la función
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // Response (promesa)

        if (!response.ok) {
            throw Error(response.status + ' ' + response.statusText)
        }

        return await response.json() // [ {....}, {....}, {....} ]

    } catch (error) {
        console.log(error)
    }
}

// const boton_datos = document.getElementById('btnGetData')
const cargarDatos = document.querySelector('#btnGetData')

// const botones = document.querySelectorAll('button')

let users = [] //global

// asignar un evento al boton
cargarDatos.addEventListener('click', async function () {
    users = []
    users = await getInfo()

    // const ul = document.createElement('ul')
    // const section = document.querySelector('section > div')

    // section.innerHTML = '' //limpiar el contenido del section

    // section.appendChild(ul)

    const ul = document.querySelector('#resultados')

    let li = '' // String

    users.forEach(user => {

        // const li = document.createElement('li')
        const { name, email, username, address } = user
        const { city } = address
        console.log(city)
        // concatenar el contenido de la etiqueta li
        li += `  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">${email}</div>
                    ${name}
                    </div>
                    <span class="badge bg-primary rounded-pill">${username}</span>
                </li>
      ` // * template string
        // li.textContent = `${name} - ${email}` // * template string

        // ul.appendChild(li)
        ul.innerHTML = li

    });
})

// })
