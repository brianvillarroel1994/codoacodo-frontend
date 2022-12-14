

function saludar(nombre){  /*aca usamos un paramoetro nombre */
    console.log("buen dia"+nombre)
    console.log("como andas")
}

function despedirse () {
    console.log("chau")
}

/*despedirse()
saludar()
despedirse()*/

saludar("maria") 
saludar("noelia")

function mult(num1,num2){ /*recordar que multiplicacion solo se puede usar dentro de la fucion y solo lo retorna la funcion y solo puede usarlo la fucion, */

    let mult= num1*num2
    console.log("la multiplicacion es"+" "+ mult)
    
}

mult(1,3)
/*-----------------------------------------------*/
function multiplicar(num1,num2){ /*la forma correcta adignamos el resultado de la fucion a una variable para poder mostrarlo y usarlo */
    let mult = num1*num2
    return mult
}

function sumar2(num){
    return num+2
}



let resultado= multiplicar(3,5)


console.log(sumar2(resultado))
/*--------------------------------------------*/
function sumar(num1,num2){
    return num1+num2
}

function restar(num1,num2){
    return num1-num2
}

let num1 = parseInt(prompt("dame el numero 1"))
let num2 = parseInt(prompt("dame el numero "))
let operacion = parseInt(prompt ("1:sumar\n 2:restar 3\n multiplicar \n" )) /*el error de esto es meter todo en una solo funcion para que haga todo */


if (operacion==1){
    resultado= sumar(num1,num2)

}else if(operacion == 2 ){
    resultado= restar(num1,num2)
}

console.log("el resultado es"+" "+resultado)

/*--------- */
function agregarImpuesto(cantidad){
    cantidad+500
    console.log("te agregamos impuestos")
    return cantidad
}

function convertir(coti, monto){
    resultado= monto/coti
    if(resultado >3000){
        resultado= agregarImpuesto(resultado)
    }
    resultado

}

let cotizacion= 280
let ahorro= 350000
 console.log("tenes dolares:"+" "+ convertir(cotizacion,ahorro))