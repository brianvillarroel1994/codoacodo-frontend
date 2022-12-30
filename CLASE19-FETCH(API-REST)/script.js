/*asincronia es un de los conceptos principales que rige el mundo del javascript en esta clase vamos a trabajar con objetos json y pegarle a api externas para traer informacion*/
//let empanadasJson=`[ /* trabajamos con obejtos json, las apis lo que hacen es traernos informacion esa infomacion tiene atributos que lo identifican en este caso in engresamos por medio de una lista */
//{
 //   "id":1,
 //   "nombre":"carne",
 //   "precio":"100"
//
//},

//{
   // "id":2,
  //  "nombre":"jyq",
  //  "precio":"135"
//}

//]`

/*console.log("Empanadas en Array");
console.log(empanadasJson);
*/
/* con ".parse" transformo el string en un objeto json para enviarlo y trabajar con la api  */

/*console.log("en json, o sea clave valor");
console.log(JSON.parse(empanadasJson));*/

const api_url = "https://api.wheretheiss.at/v1/satellites/25544" ;

 async function obtenerPosicion(){ // hacemo que la funcion sea asincronocica con "async" y con "await" hacemos que espere la funcion
    const response = await fetch(api_url) //fecht (libreria Externa) lo que hace es pegarle a una URL y devolverme un promesa, informacion actualizada 
    console.log(response)           // las promesas viene en esta pending (pendiente) en este caso si la url esta bien devuelve lo esperado si no nos dice que hay algo mal o tira error
                                    // me traje la promesa y lo guardo en un response

const data = await response.json()  // tranformamos response en un objeto punto json
console.log(data)
//const latitude = data.latitude 
const {latitude , longitude , velocity, unit} = data 
console.log ("la latitud es:"+" "+ latitude)

document.getElementById("lat").textContent= latitude
document.getElementById("lon").textContent= longitude
document.getElementById("vel").textContent= velocity

}

obtenerPosicion()