const l = [
    {
        nombre: "Marcelo",
        edad: 20,
        email: "prueba1@mail.com",
    },
    {
        nombre: "Jorge",
        edad: 25,
        email: "prueba2@mail.com",
    },
    {
        nombre: "José",
        edad: 30,
        email: "prueb3@mail.com",
    },
    {
        nombre: "Marco",
        edad: 32,
        email: "prueba4@mail.com",
    },
    ];


const listaFiltrada = l.filter(e => e.nombre[0] == "M")

const ul = document.createElement("ul");
repo = 'https://github.com/nicolagardo/silabuz-u7-a7'
const lista = listaFiltrada.map(e => {
    let ulName = document.createTextNode(e.nombre);
    ul.appendChild(ulName);
    let ulSub = document.createElement("ul");
    let li = document.createElement("li");
    let li2 = document.createElement("li");

    let edad = document.createTextNode(e.edad);
    let email = document.createTextNode(e.email);
    li.appendChild(edad);
    li2.appendChild(email);
    ulSub.appendChild(li);
    ulSub.appendChild(li2);
    ul.appendChild(ulSub);


});

document.body.appendChild(ul)