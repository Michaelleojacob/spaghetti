const people = [];
const template = document.querySelector("#people-template");
const addPersonButton = document.querySelector("#addPerson");
const personinfo = document.querySelector(".personinfo");
const ulpeople = document.querySelector("#people");

const render = function (template, node){
    if (!node) return;
    node.textContent = template;
}

addPersonButton.addEventListener("click", function(e){
    console.log(e);
    const personName = personinfo.value;
    people.push(personName);
    const data = {
        people: people,
    }
    console.log(data);
    myperson = document.createElement('li');
    myperson.setAttribute("id", personName);
    render(personName, myperson);
    ulpeople.appendChild(myperson);
    delbtn = document.createElement("SPAN");
    myperson.appendChild(delbtn);
    delbtn.textContent = "X";
    personinfo.value = "";
});

footer = document.querySelector(".footer");
myul = document.createElement("ul");
myul.textContent = "hello";
myil = document.createElement("li");
myil.textContent = "kenobi";
myspan = document.createElement("SPAN");
myspan.textContent = "X";
footer.appendChild(myul);
myul.appendChild(myil);
myil.appendChild(myspan);


