
const nombres =  ["Marcelo","Jorge","José","Linder"]

let ul = document.createElement("ul");
 nombres.forEach(e => {
    let li = document.createElement("li");
    console.log(e);
    let nombre = document.createTextNode(e);
    li.appendChild(nombre)
    ul.appendChild(li)
 });

 document.body.appendChild(ul)