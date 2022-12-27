let app= new Vue({  // creamos un nuevo objeto
    el: "#app", //id  todos los obejtos tienen atributos y metodos
    data:{
        valorBind:"Hola",
        valorModel:"Hola",
        link:"https:google.com",
        nombrelink:"google",
        nombre:"",
        tecnologias:["java", "github", "jenkis"]

    } // dentro de data se ingresan los atributos

}) 

new Vue({
el:"#formVue",
data:{
    nuevaTarea:"", // asi esta en vacion para poder grabar el dato que vamos a ingresar
    tareas:[], // esta en vacio, asi lo vamos cargando.
},

methods:{//metodos de mi formulario  por medi de v-on
    guardarTarea(){ // dentro de guardar tarea va a estar la logica de como va a guardar un tarea en un array
        this.tareas.push(this.nuevaTarea) // con this hacemos referencia a nuestro objeto en este caso a mi obejto tarea y nuevaTarea, por que puede dar el caso de que exisiten otros objetos con el mismo nombre pero asi hago referencia a mi objeto
        this.nuevaTarea=""                                    // puede suceder que tengas otro objeto que tenga tareas y nuevaTareas, pero con This hacemos referencia a que solo la va a usar el objeto que lo invoca, si no usamos el thsi rompe por que no va a saber a que obejto que tenga tereas y nuevasTareas va a llamar

    }

},


})