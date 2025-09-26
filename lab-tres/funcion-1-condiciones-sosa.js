function ejercicio2(edad) {
var mensaje;

    if (edad >= 18) {
        mensaje = `tienes ${edad} años eres mayor de edad.`;
    } else {
        mensaje = `tienes ${edad} años eres menor de edad.`;
    }   
}
document.getElementById("resultado").textContent = mensaje;