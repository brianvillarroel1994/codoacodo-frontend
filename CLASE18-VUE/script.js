/*vue es un framework osea un marco de trabajo  */
/*las directivas que mas se usan son v-bind / v model  (leer vue
    )*/


let app = new Vue({   /*objeto del tipo vue*/
    el: "#app", /*llamo al id */
    data: {   /*interpola la llave entre los corchetes, ademas data son los atributos del objeto */
        titulo: "clase de vue",
        marca: "toyota",
    },
}); 