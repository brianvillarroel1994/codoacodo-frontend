// array y bucles
//let num = parseInt(prompt("ingresa numero"))
let num =0
while (num<4) {
    console.log(num)
    num++
}
 console.log("eis moy grande")

 for(let contador = 0 ; contador <=10 ; contador ++){
    console.log(contador)
 }

 let valorInicial= parseInt(prompt("ingrese un valor inicial"))
 let valorFinal= parseInt(prompt("ingrese valor final" ))
 let valorIncremento= parseInt(prompt("ingresar valor de incremento"))

 for (let i=valorInicial; i<valorFinal; i+= valorIncremento ){
    
    if (i%2==0) { // con esto muestro los pares 
        console.log(i)
    }
    
 }


 // array 

 let primeraForma = [ "roxana" , "carlos" ,1 , 2, true  ]
console.log(primeraForma)
console.log(primeraForma.length)

let otraForma= new Array("roxana" , "carlos" ,1 , 2, true)
console.log(otraForma)

let nombres = new Array()
nombres[0]="carlos"
nombres[1]="juana"
nombres[2]="maria"
nombres[3]="alberto"

console.log(nombres[0])

// agregar al final 
nombres[nombres.length]= "hector"
console.log(nombres)

nombres.push("daiana") // agrega al final de la lista
console.log(nombres)

//agregar al principio

nombres.unshift("pipo") 
console.log(nombres)

// borrar elementos de la lista

let removido= nombres.shift() // guardo el removido 
nombres.shift()  // puedo hacerlo mas practico :  let removido= nombres.shif()
console.log(nombres) // elimina el primer elemento 
console.log("el removido es"+" "+ removido)

let removidoDelfinal= nombres.pop()  //elimina el ultimo elemento
console.log(nombres)

// seleccionar elementos del medio del array  para sacarlos o modificarlos 

 //nombres.splice(1,3) // asi los simplemente los elmino elimino
//let nombresRemovidos=  nombres.splice(1,3) // de esta forma los guardo en una variable los que removi 
//console.log(nombresRemovidos)
 //space (posicion, cantidad que queres borrar, los que quieras agregar separados por coma)

 nombres.splice (1,0,"daniel","melisa")
console.log(nombres)

// transformar  un array en un string
 console.log(nombres.join("-")) // con join convertimos los array en una cadena de caracteres , en este caso separado por un guion
 console.log(nombres.join(" ")) // separados por un espacio 
 console.log(nombres.join("\n")) // uno abajo de otro