document.addEventListener("DOMContentLoaded", function () {
   
    const button= document.getElementById("btn");

    button.addEventListener("click", function(event){
        event.stopPropagation();
        alert("Hola!");
    });
    

    const boton= document.getElementById("boton");

    boton.addEventListener("click", function(event){
        alert("Hola! Soy el div");
    });

});