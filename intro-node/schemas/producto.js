const { z } = require('zod');

const validateProduct = (producto) => {

    const schema = z.object({
        "title": z.string(),
        "price": z.number().positive(),
        "description": z.string().min(10),
        "category": z.string().optional(),
        "image": z.string().url()
    })

    return schema.safeParse(producto)
}

module.exports = {
    validateProduct
}