(function(){
    "use strict";
    const people = {
        people: [],
        init: function(){
            this.cacheDom();
            this.clickToPush();
            this.delPerson();
            this.enterToPush();
        },
        cacheDom: function(){
            this.el = document.body.querySelector("#peopleModule");
            this.ul = this.el.querySelector("#people");
            this.btn = this.el.querySelector("#addPerson");
            this.pinfo = this.el.querySelector(".personinfo");
        },
        clickToPush: function(){
            const parent = this;
            const personinfo = this.pinfo;
            document.addEventListener("click", function(e){
                if(personinfo.value === "")return;
                if(personinfo.value !== "")people.people.push(personinfo.value);
                personinfo.value = '';
                parent.renderToPage(people.people);
            })
        },
        enterToPush: function(){
            const parent = this;
            const personinfo = this.pinfo;
            document.addEventListener("keydown", function(e){
                if(e.key === "Enter"){
                    if(personinfo.value === "")return;
                    if(personinfo.value !== "")people.people.push(personinfo.value);
                    personinfo.value = '';
                    parent.renderToPage(people.people);
                }
            })
        },
        renderToPage: function(arr){
            while(this.ul.lastElementChild) {
                this.ul.removeChild(this.ul.lastElementChild);
            }
            arr.forEach(element => {
                const personli = document.createElement("li");
                personli.textContent = element;
                personli.classList.add(element)
                this.ul.appendChild(personli);
                this.renderDelBtnToSpan(personli);
            });
        },
        renderDelBtnToSpan: function(el){
            const delbtn = document.createElement("span");
            delbtn.classList.add(el.classList[0], "del")
            delbtn.textContent = "x"
            el.appendChild(delbtn);
            return delbtn
        },
        delPerson: function(){
            const myobj = this;
            const parent = this.ul;
            parent.addEventListener("click", function(e){
                if(e.target.classList[1] === "del"){
                    const itemToDel = e.target.classList[0];
                    delete people.people[people.people.indexOf(itemToDel)];
                    people.people = people.people.filter(item => item);
                    return myobj.renderToPage(people.people);
                }
            })
        }
    }
    people.init();
})()