lista =  [1,3,5,2,7,5,5,8,4,8,4,8,4]

let elemento = prompt("Ingrese el num")

//let elemento = prompt("Ingrese un numero a eliminar")

let result = lista.filter(num => num == elemento).length
console.log(result);
console.log(typeof(result));
var cont = 0
for (let i = 0; i < lista.length; i++) {
    if(lista[i] == elemento)
        cont += 1
    
}
console.log(cont);


const elemento2 = parseInt(prompt("Ingrese el elemento a contar: "));

let count = 0;
for (let i = 0; i < lista.length; i++) {
  if (lista[i] === elemento2) {
    count++;
  }
}

console.log(`El elemento ${elemento2} se encuentra ${count} veces en el arreglo.`);



