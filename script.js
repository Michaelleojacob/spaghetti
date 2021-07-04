const people = [];
const template = document.querySelector("#people-template");
const addPersonButton = document.querySelector("#addPerson");
const personinfo = document.querySelector(".personinfo");
const ulpeople = document.querySelector("#people");

const render = function (template, node){
    if (!node) return;
    node.innerHTMl = template;
}

addPersonButton.addEventListener("keydown", function(e){
    console.log(e);
    const personName = personinfo.value;
    people.push(personName);
    const data = {
        people: people,
    }
    console.log(data);
    // ulpeople.appendChild(render("li", data))
});
