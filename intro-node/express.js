const express = require('express')
const productos = require('./productos/productos.json')
const { validateProduct } = require('./schemas/producto')
const { randomUUID } = require('crypto');

const app = express()

app.disable('x-powered-by')

const port = 3000

// Middleware para parsear el body

app.use(express.json())

// app.use((req, res, next) => {

//     if (req.method !== 'POST') next()

//     if (req.headers['content-type'] !== 'application/json') next()

//     let body = ''

//     req.on('data', chunk => {
//         body += chunk.toString()
//     })

//     req.on('end', () => {
//         try {
//             const json = JSON.parse(body)

//             req.body = json
//             next()
//         } catch (error) {
//             return res.status(400).json({
//                 success: false,
//                 msg: 'Invalid JSON',
//                 data: null
//             })
//         }
//     })
// })

// Definiendo las rutas de mi API

//CONSULTAS
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hola desde express</h1>')
})

app.get('/productos', (req, res) => {
    //la logica para consultar los productos de la base de datos

    const { category } = req.query //obtenemos el query param de la url

    const respuesta = {
        success: true
    }

    if (category) {
        const productosByCategory = productos
            .filter(producto => producto.category.toLowerCase() === category.toLowerCase())
        respuesta.data = productosByCategory
        // return res.json(productosByCategory)
    } else
        respuesta.data = productos

    res.json(respuesta)
})

app.get('/productos/:id', (req, res) => {
    const { id } = req.params //obtenemos el parametro de la url

    const producto = productos.find(producto => producto.id.toString() === id)

    if (producto)
        return res.json({
            success: true,
            msg: 'Producto no encontrado',
            data: producto
        })

    res.status(404).json({
        success: false,
        msg: 'Producto no encontrado',
        data: null
    })
})

//CREAR
app.post('/productos', (req, res) => {

    const { body } = req

    const respuesta = validateProduct(body)

    if (respuesta.error) {
        return res.status(400).json(JSON.parse(respuesta.error.message))
    }

    // TODO: el insert en la base de datos (simulado)
    const producto = { id: randomUUID(), ...respuesta.data }
    productos.push(producto)


    res.json({
        success: true,
        msg: 'Producto creado',
        data: producto
    })
})



app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})

