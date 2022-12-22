lista = [15,20,50,80,40,60]
//console.log([] == []);

let dato = prompt("Ingrese un numero a borrar")

// lista.filter(num => num != dato)

// alert(lista)
// console.log(lista);
const i = lista.indexOf(parseInt(dato))
lista.splice(i, 1)
console.log(lista);

