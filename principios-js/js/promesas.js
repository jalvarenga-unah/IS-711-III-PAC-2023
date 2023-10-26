
// promesas

// ? P: Pendiente, no se ha cumplido ni rechazado
// * F: Finalizada, se ha cumplido
// ! R: Rechazada, no se ha cumplido


const validarNumero = (value) => {

    //retorna una promesa
    return new Promise((resolve, reject) => {

        console.info('dentro de la promesa con el valor: ', value)

        setTimeout(() => {
            if (typeof value == 'number') {
                resolve('Es un numero') // valor con el que se reseulve
            }
            reject('No es un numero') // el valor con el que se rechaza

        }, 2000)

    })

}

console.log('iniciando promesa')

validarNumero('5')
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    })

validarNumero(5)
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    })

console.log('promesa finalizada')
