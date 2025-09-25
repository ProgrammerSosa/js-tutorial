/**
 * 
 * 
 * *  FUNCIONES --> JS -> TIPOS DE DATOS
 * 
 * 
 * 
 */

// COMOM DUEÑOS DE UNA EMPRESA NESESIMAOS CALCULAR EL DESCUENDTO DE PRODUCTOS EN OFERTA

function calcularDescuento(precio,porcentajeDescuento){
    const descuento = (precio * porcentajeDescuento)   / 100
    const precioConDescuento = precio - descuento

    return precioConDescuento;

}

const precioOriginal =1000;
const porcentajeDescuento =15;
const precioFinal = calcularDescuento(precioOriginal,porcentajeDescuento)

console.log("precio original:Q." + precioOriginal);
console.log("descuento:" + porcentajeDescuento + "%");
console.log("el precio final con descuento es:Q." + precioFinal);