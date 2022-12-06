alert("hola mundo") //arrancamos

//variable ya no se usa var, se usa let igual hayq eu verlo en el laburo dependiendo de como se trabaje 
// si no queres que el valor cambie se usa const
 let origen ="bueno aires"
 console.log("el vuelo de origen es desde" + origen)

 let VueloOrigien = "buenos aires "

 let vueloDestino = "miami"

 let viaje = VueloOrigien + "a" + vueloDestino

//es lo mismo que poner el + pero mas practica y directamente lo ponemos dentro de console.log

//alt 96 me da las comilla francesas
console.log(`${VueloOrigien} va a ir hacia ${vueloDestino}` )

//calculadora 
let  nombreUsuario = prompt ("ingresa tu nombre: ")
alert ("Hola" + nombreUsuario)

let num1 = parseInt( prompt("ingresa el primer numero")) //esto asi solo me devuelve un string entonces devo convertir mi string en un int con la funsion parseiInt
 let num2 = parseInt (prompt (" ingrese el segundo numero"))
//propt me permite ingresar un valor
// si o si tenemos que definir el tipo de la variable a ingresar en javascript

let suma = num1 +   num2
let resta = num1 - num2
let mult= num1 * num2  
let div = num1 / num2

console.log("la suma es" + suma )
console.log("la resta es" + resta)
console.log("la multiplicacion es" + mult)
console.log("la division es" + div)

//booleanos 

let valor =  5==5 
console.log(valor)

document.write("<h1> es un subtitulo  <h1/>") // con esto hago que me aparesca el titulo en la pagiNA

let palabra = "Hola"

console.log( palabra.length)

console.log(palabra.replace("buenas"))


