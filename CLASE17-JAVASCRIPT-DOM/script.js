let parrafos = document.getElementsByTagName("p") /*traeme todos los elementos del parrafo */
console.log(parrafos)

let segundoParrafo = parrafos[1] /* aca selecciono el segundo parrafo*/
console.log(segundoParrafo)

let tercerParrafo=parrafos[2].innerHTML /* esto me trae contenido del tercer parrafo, osea lo que esta dentro de la etiqueta */
console.log(tercerParrafo)

parrafos[1].innerHTML="nuevo contendio" /*le damos un nuevo contenido a la etiqueta, esto lo podemos usar por ejemplo si tenemos un mail invalido podemos usarlo para poner las letras en rojo o decir mail invalido */

document.getElementById("parrafo3").style.color="blue" /*me trae un elemento por id */

/*-----LO QUE SE USA EN EL MERCADO------ */
let titulo= document.querySelector("h1") /*trae por etiqueta solo al primero que encutra */
console.log(titulo)

let titulo2=document.querySelector(".laclase") /*aca lo pemos traer por clase , si quiero llamar un id uso #*/ 
console.log(titulo2)

let cajita = document.querySelector(".caja")
console.log(cajita)

let container2=document.querySelector("#container2") /*buena practica para traer elemento determinados ua que queryselector solo te trae el primer elemento que encunetra pero asi por medio del id selecciono el elemento */
let cajita2=container2.querySelector(".caja")
console.log(cajita2)

/* por medio de codigo*/ 
let cajas = document.querySelectorAll(".caja")
console.log(cajas)

for (let i = 0; i < cajas.length; i++) {
    cajas[i].style.color="red"
    
}

/*cambiamos de color de forma funcional como se usa ahora */
cajas.forEach(c =>c.style.color="green")

