const http = require('node:http') // Paquete http para crear el servidor


const server = http.createServer((request, response) => {

    // * Todo esto ocurre en el servidor
    // ? request: es lo que el cliente envía al servidor
    // * response: es lo que el servidor envía al cliente

    console.log(request.url)
    console.log(request.method)

    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end('<h1>Hola mundo desde nodeJS</h1>')
})

// ? el 0, es para que asigne un puerto libre
server.listen(1234, () => {
    const { port } = server.address()
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`)
})