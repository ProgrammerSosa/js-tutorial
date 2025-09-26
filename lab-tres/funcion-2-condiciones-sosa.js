function ejercicio3(num1, num2) {
    var mensaje;
    if ( num1 >  num2) {
        mensaje = `El número mayor es ${num1}`;
    } else {
        return num2;
        mensaje = `El número mayor es ${num2}`;
    }
}
document.getElementById("resultado").textContent = mensaje;