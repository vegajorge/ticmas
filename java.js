document.getElementById("boton-educacion").addEventListener("click", function(){
    cambiarDisplay(document.getElementById("educacion"));
});
document.getElementById("boton-experiencia").addEventListener("click", function(){
    cambiarDisplay(document.getElementById("experiencia"));
});
document.getElementById("boton-proyectos").addEventListener("click", function(){
    cambiarDisplay(document.getElementById("proyecto"));
});
function cambiarDisplay (x){
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}