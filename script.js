/*valor es una varible local que se crea dentro de esta funcion solo existe aca*/
/* esta funcion agrega a la */
function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

function limpiar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {

    let pantalla = document.getElementById("pantalla");

    pantalla.value = eval(pantalla.value);
}