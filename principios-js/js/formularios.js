
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) => {
    // Obtener los datos del formulario
    // prevenir el comportamiento por defecto del formulario
    e.preventDefault() // evita que la página se recargue

    const datos = new FormData(e.target)
    // const parsedData = Object.fromEntries(datos.entries())

    // console.log([...datos.entries()])

    const parsedData = {}

    for (const [key, value] of datos.entries()) {
        parsedData[key] = value
    }

    console.log(parsedData)

    guardarDatos(parsedData)

    // console.log(datos.get('nombre'))
    // console.log(datos.get('correo'))
    // console.log(datos.get('telefono'))
})

const guardarDatos = async ({ telefono, nombre, correo }) => {
    // hacer validaciones
    if (correo === '' || correo.indexOf('@') === -1) {
        // mostrar un mensaje de error
        return false
    }
    // enviar los datos al servidor

    // retornar la respuesta del servidor
    return true
}

guardarDatos()
    .then((respuesta) => {
        console.log(respuesta)
    })