const lista = document.getElementById("guardardatos");

lista.addEventListener("submit", (event) => {
    event.preventDefault();
    let recetaImagen = document.getElementById("recetaImagen").value;
    let recetatitulo = document.getElementById("recetatitulo").value;
    let recetacontenido = document.getElementById("recetacontenido").value;
    let recetaDificultad = document.getElementById("recetaDificultad").value;
    let guardado = {recetaImagen:recetaImagen, recetatitulo: recetatitulo, recetacontenido: recetacontenido,
        recetaDificultad: recetaDificultad};
    let guardadoJson = JSON.stringify(guardado);
    console.log(guardadoJson);
}
)