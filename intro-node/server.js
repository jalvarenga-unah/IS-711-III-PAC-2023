const http = require('node:http') // Paquete http para crear el servidor
const productos = require('./productos/productos.json') // Importamos el archivo productos.json

const server = http.createServer((request, res) => {

    // * Todo esto ocurre en el servidor
    // ? request: es lo que el cliente envía al servidor
    // * res: es lo que el servidor envía al cliente

    const { url, method } = request

    switch (method) {
        case 'GET':
            switch (url) {
                case '/':
                    res.statusCode = 200
                    res.end('Hola desde el home')
                    break;
                case '/productos':
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    // TODO: realizar la lógica para consultar los productos en la base de datos
                    res.end(JSON.stringify(productos))
                    break;
                case '/productos/1':
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    const resultado = productos.filter((producto) => producto.id === 1)
                    res.end(JSON.stringify(resultado))
                    break;
                default:
                    res.statusCode = 404
                    res.end('page not found')
            }

            break;
        case 'POST':

            switch (url) {
                case '/productos':

                    let body = ''

                    request.on('data', (chunk) => {
                        body += chunk.toString()
                    })

                    request.on('end', () => {
                        const data = JSON.parse(body) // convertimos el string a un objeto

                        // TODO: validar que el objeto tenga todos los campos necesarios
                        // TODO: Registrar el producto en la base de datos

                        res.writeHead(201, { 'Content-Type': 'application/json' })

                        data.id = 1000
                        data.timestamp = Date.now()

                        res.end(JSON.stringify(data))

                    })
                    break;
            }
            break;
        case 'DELETE':
            break;
        case 'PUT':
            break;

        default:
            res.statusCode = 404
            res.end('page not found')
    }
})

// ? el 0, es para que asigne un puerto libre
server.listen(1234, () => {
    const { port } = server.address()
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`)
})