const api_url= "https://pokeapi.co/api/v2/pokemon/1"

async function traerpoke(){
    const response = await fetch(api_url)
    const data = await response.json()
    console.log(data)

    document.getElementById("primero").innerHTML= "<h4>" + data.name + "</h4>" // estamos trayendo el el nombre del bojeto json para mostrarlo en el html

    const divisor = document.getElementById("primero") // aca es dond  vamos a mostrar la imagen 

    let img = document.createElement('img') // estamos creando un elemeento, para eso  tenemos que guardarlo en una varible y luego le metemeos el contenido, en este caso la imagen
    img.setAttribute("src", data.sprites.front_default) // aca estamos trayendo la imagen del objeto json
    divisor.appendChild(img) // aca estamos ingresando la imagen en el div
}

traerpoke()

