/****
 * 
 *  ESTRUCTURA SWITRCH
 * 
 * 
 * 
 */


let comprar = "Uvas"

switch (comprar){
    case "naranjas":
        console.log("Las NARANJAS ESTAN A 10 LA MANO");
        break;
    case "manzanas":
            console.log("Las manzanas ESTAN A 15 LA MANO");
            break;
    case "platanos":
                console.log("Las platanos ESTAN A 20 LA MANO");        
                break;
                default:
                    console.log(`lo setnmos no contamos con  ${comprar}`);
                    break;
}