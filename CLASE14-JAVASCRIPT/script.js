// pregunta de entrevista
// java scrip funciona en base al navegador no al editor de texto
 //

 let num = 1 
 num + 1 //aca no se lo aginas a nadie por eso no lo toma
console.log ("el numero 1 es" + num  ) // el resultado es 1
  
num++ // este valor si lo tama ya que ++ es una funcion 

console.log("el numero 1 es:" + num++) //primero lo imprime, seria 1 en la segunda funcion de abajo te muestra 2 por que despues de imprimirse aplica la suma ++
console.log("el numero 1 es:" + num )

// dada las edades quien es el mayor //
let edad1 = parseInt(prompt("ingresa la primera edad"))
let edad2 = parseInt(prompt ("ingresa la segunda edad"))
 //cual e sla diferencai de else if e if en java script 
  if (edad1>edad2){
    console.log("la "+edad1+" es mas mayor")
  }else if(edad1<edad2){
    console.log("la "+edad2+" es mayor")
  }else(
    console.log("entonces son iguales!")
  )

  let pegoCuota = true
  let edadPersona = parseInt(prompt("ingresa la edad"))

  if(edadPersona >= 18 && pegoCuota){ //el orden de las condiciones es fundamental por que en caso del && QUE DEBE CUMPLIRSE AMBAS CONDICIONES SI CUMPLE LA PRIMERA CHEQUEA LA SEGUNDA , SI ESTO LO INVIRTIERA SIEMPRE VA A TENER QUE CHEQUEA LA SENGUDAN, DE LA PRIMERA FORMA NOS AHORRAMOS UN PASO

    console.log("puede ver la pelicula")
  }else{
    console.log("no puede ver la pelicula")
  }