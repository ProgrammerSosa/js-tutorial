/**
 * 
 *  CICLO FOR -> PARA
 * 
 *

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
    */

let lista = ["comer" ,"dormir","code","repetir"]
for (let i = 0; i < lista.length; i++) {
    cconsole.log = lista[i];
    
}

// FOR-OF
let canasta = ["manzanas","naranjas","mangos","uvas"]
for (fruta  of canasta) {
    console.log(fruta)
}
// FOR-IN
// --> itera sobre las propiedades de in objeto

const canastaDeFrutas ={
    nombre : "manzana",
    precio : 5.0,
    tipo   : "verde",
    marca  : "chanita's apples"
}
for (const key in object) {
    if (fruta in canastaDeFrutas) {
      console.log(canastaDeFrutas)
        
    }
}
