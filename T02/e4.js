let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// result = m[0][0] + m[1][1] + m[2][2]
// console.log(result/3);

// for (let i = 0; i < m.length; i++) {
//     for (let j = i; j < m.length; j++) {
//         let suma =+ m[i][j]
//         console.log(suma);
        
//     }
    
// }

// let promedio = 0
// let count = 0
// for (i = 0; i < array.length; i++) {
//     promedio += array[i][count]
//     count += 1
// }
// promedio = suma / 3;
// console.log(promedio);

let suma = 0
for (i = 0; i < array.length; i++) {
    suma += array[i][i]
   
}
console.log(`promedio: ${suma/3}`)


