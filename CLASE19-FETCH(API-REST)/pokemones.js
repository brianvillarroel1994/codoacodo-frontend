const api_url= "https://pokeapi.co/api/v2/pokemon"

async function traerpoke(){
   // const response = await fetch(api_url)
   // const data = await response.json()
   // console.log(data)

   // // si esto andubo bien uso then, suponiendo q ue todo anda bien ( ver nuevamente el video) 
   /* usamoe el then en caso de que ande todo bien pero si se produce un error por ejemplo de que esta copiada 
   mal la url usamos punto catch para que envie un msj en caso de que algo este andadndo mal y no pueda traer 
   el bojeto json */
   fetch(api_url).then(function(response){
    return response.json()

    }).then(function(obj){
        console.log(obj)

    }).catch(function(error){
        console.log("se pudrio todo:::::")
        console.log(error)

    })


}

traerpoke()
