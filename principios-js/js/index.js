 // scope = alcance de una variable

 var nombre = 'Juan' // scope global
 let apellido = 'Alvarenga' // scope local

 // console.log(nombre)

 var nombre = 'Pedro'
 // var apellido = 'Perez' // no se puede redeclarar una variable con var

 // console.log(nombre)
 // console.log(apellido)

 {
     // es otro scope

     let apellido = 'Perez'
     var nombre = 'Maria' // global

     console.log('Scope interno', nombre)
     console.log('Scope interno', apellido)
 }

 console.log('Scope externo', nombre)
 console.log('Scope externo', apellido)

 let edad = 20

 //  arreglo / lista
 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 console.log(numeros.length) // cantidad de elementos del arreglo
 console.log(numeros.pop()) // elimina el ultimo elemento del arreglo
 console.log(numeros.push(11)) // agrega un elemento al final del arreglo
 console.log(numeros.shift()) // elimina el primer elemento del arreglo
 console.log(numeros)
 // objeto JOSN (JavaScript Object Notation)

 const mascota = {
     'nombre': 'Apolo',
     'edad': 2,
     'apodo': 'Apolito'
 }

 mascota.raza = 'Terrier'// si no existe la propiedad la crea
 mascota.nombre = 'Luna' // si existe la propiedad la modifica

 //eliminar una propiedad
 delete mascota.apodo

 console.log(mascota)
 console.log(mascota.nombre)
 console.log(mascota['edad'])

