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

    // let div = document.createElement("div");
    
    // let list = l.map(function(item) {
        //   let p = document.createElement("p");
        //   let text = document.createTextNode(
            //     `Nombre: ${item.nombre}, Edad: ${item.edad}, Email: ${item.email}`
            //   );
            //   p.appendChild(text);
            //   div.appendChild(p);
            // });
            
            // document.body.appendChild(div);
const ul = document.createElement("ul");

const lista = l.map(e => {
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
