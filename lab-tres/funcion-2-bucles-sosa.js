function ejercicio20(num) {
    var mensaje
    let suma = 0;       
    for (let i = 0; i < num.length; i++) {
        suma += num[i];
    }
    return suma;
}
document.getElementById("resultado").textContent = mensaje;