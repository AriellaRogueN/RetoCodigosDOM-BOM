document.getElementById("btn").disabled = true;


function add() {

    /*seleccionar el texto ingresado por el usuario y darle valor*/
    var comments = document.getElementById("usertext").value;

    /*Limpiar el area de texto*/
    document.getElementById("usertext").value = "";

    /*creo variable para el contenedor de los comentarios, seleccionando su respectivo div*/
    var textcont = document.getElementById("commentContainer");

    /*creo nuevo div para los comentarios*/
    var replicatedComments = document.createElement("div");


    /* Para crear nodos de texto, generamos nuevas variables que van a corresponder
    al texto ingresado por el usuario y a la nueva etiqueta que se generara con ese
    texto, luego agregamos estas variables, a los elementos ya generados*/

    var newText = document.createTextNode(comments);

    var newElement = document.createElement("p");

    newElement.appendChild(newText);

    replicatedComments.appendChild(newElement);

    commentContainer.appendChild(replicatedComments);
}

/*Creo contador y especifico numero maximo de caracteres*/
function contar() {
    var max = "140";
    var cadena = document.getElementById("usertext").value;
    var longitud = cadena.length;
    /*condiciono algunas caracteristicas de cambio de color y 
    activación del botón, segun el número de caracteres*/
    if (longitud <= max) {
        document.getElementById("counter").value = max - longitud;
    } else {
        cadena.substr(0, max);
    }
    if (longitud == 0 || longitud > 140) {
        document.getElementById("btn").disabled = false;
    }

    if (longitud >= 1 && longitud <= 120) {
        document.getElementById("counter").style.color = "#009bf6";
    }

    if (longitud > 120 && longitud <= 130) {
        document.getElementById("counter").style.color = "orange";
    }
    if (longitud > 130 && longitud <= 140) {
        document.getElementById("counter").style.color = "red";
    }
}

/*hacer crecer el TextArea de acuerdo al tamaño del texto*/
//uso this como controlador de eventos en el DOM//
/*setTimeout(function () No existe como evento en JavaScript nativo,
es un truco para poder simular jQuery*/
//cssText establece una regla de hoja de estilo dinámicamente//

var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', function autosize() {
    var area = this;
    setTimeout(function () {
        area.style.cssText = 'height:auto; padding:4px';
        area.style.cssText = 'height:' + area.scrollHeight + 'px';
    }, 0);
});