const express = require('express')
const productos = require('./productos/productos.json')

const app = express()

app.disable('x-powered-by')

const port = 3000

// Definiendo las rutas de mi API
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

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})

