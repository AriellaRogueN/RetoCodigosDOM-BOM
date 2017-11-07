
function add () {

/*seleccionar el texto ingresado por el usuario y darle valor*/
    var comments = document.getElementById("usertext").value;

/*Limpiar el area de texto*/
    document.getElementById("usertext").value = "";

/*creo variable para el contenedor de los comentarios, seleccionando su respectivo div*/
var textcont = document.getElementById("commentContainer");
 
/*creo nuevo div para los comentarios*/
var replicatedComments = document.createElement("div");

/*validamos lo que debe ingresar el usuario*/

if (comments.length == 0 || comments == null) {
    alert('Debes ingresar un mensaje');
    return false;
}

/* Para crear nodos de texto, generamos nuevas variables que van a corresponder
al texto ingresado por el usuario y a la nueva etiqueta que se generara con ese
texto, luego agregamos estas variables, a los elementos ya generados*/

    var newText = document.createTextNode(usertext);

    var newElement = document.createElement("p");

    newElement.appendChild(newText);

    replicatedComments.appendChild(newElement);

    commentContainer.appendChild(replicatedComments);

}
