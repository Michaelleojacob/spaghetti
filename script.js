let people = [];
const addPersonButton = document.querySelector("#addPerson");
const personinfo = document.querySelector(".personinfo");
const ulpeople = document.querySelector("#people");

function makeLiAndSpanDelBtn(pname){
    myperson = document.createElement('li');
    myperson.classList.add(pname);
    myperson.textContent = pname;
    ulpeople.appendChild(myperson);
    delbtn = document.createElement("span");
    delbtn.classList.add(pname, "del");
    myperson.appendChild(delbtn);
    delbtn.textContent = "X";
    personinfo.value = "";
}

addPersonButton.addEventListener("click", function(e){
    const personName = personinfo.value;
    people.push(personName);
    makeLiAndSpanDelBtn(personName);
});

document.addEventListener("click", function(e){
    if(e.target.className.includes("del")){
        const name = e.target.classList[0];
        people = people.filter(item => item !== name);
        document.querySelector(`.${name}`).remove();
    }
})