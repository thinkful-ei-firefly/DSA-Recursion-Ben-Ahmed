 function powerCalculator(base, power){
     if (power < 0){
        return 'should return exponent should be >= 0'
     } 
     if (power === 0) {
         return 1
     }
     if (power === 1){
         return base
     }

     return base * powerCalculator(base, power-1)
 }

console.log( powerCalculator(10,2))