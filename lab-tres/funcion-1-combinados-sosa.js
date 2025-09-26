function ejercicio21() {
    var mensaje;
    let par = [];     
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            par.push(i);
        }
    }
    return par;
}
document.getElementById("resultado").textContent = mensaje;