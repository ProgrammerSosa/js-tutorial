/**
 * 
 * 
 *          CONVERSIONES -> EXPLICITAS E IMPLICITAS
 */

        // CONVERSION Explicit Type Cating

        const string = '54'
        const integer = parseInt(string)

      //  console.log(typeof string)
      //  console.log(typeof integer)


        const float = parseFloat("3.14159")
      //  console.log(typeof float)

        const binario = '1010'
        const decimal = parseInt (binario ,2)

      //  console.log(decimal)

        const hexa = 'CAFE'
        const decimalhex = parseInt(hexa , 16)
            
        //conversion Implicit Type Cating
const resultado = '5' + 3
console.log(typeof resultado)

const sumaConBoolean = '3' + true 
console.log (sumaConBoolean)

const sumaConNumero = 2 + true
console.log(sumaConNumero)

const valorString = '20'
const valorNumbre = 10
const valorBoolean = true
console.log(valorString + valorNumbre + valorBoolean)