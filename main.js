(function(){
    "use strict";
    const people = {
        people: [],
        init: function(){
            this.cacheDom();
            this.pushToArr();
            this.alwaysOn();
        },
        cacheDom: function(){
            this.el = document.body.querySelector("#peopleModule");
            this.ul = this.el.querySelector("#people");
            this.btn = this.el.querySelector("#addPerson");
            this.pinfo = this.el.querySelector(".personinfo");
        },
        pushToArr: function(){
            const personinfo = this.pinfo;
            this.btn.addEventListener("click", function(e){
                if(personinfo.value === "")return;
                if(personinfo.value !== "")people.people.push(personinfo.value);
                personinfo.value = '';
                people.renderPersonToPage(people.people);
            });
        },
        renderPersonToPage: function(arr){
            const personli = document.createElement("li");
            const info = arr[arr.length-1];
            personli.textContent = info;
            personli.classList.add(info)
            this.ul.appendChild(personli);
            this.renderDelBtnToSpan(personli);
        },
        renderDelBtnToSpan: function(el){
            const delbtn = document.createElement("span");
            delbtn.classList.add(el.classList[0], "del")
            delbtn.textContent = "x"
            el.appendChild(delbtn);
            return delbtn
        },
        alwaysOn: function(){
            parent = this.ul;
            parent.addEventListener("click", function(e){
                if(e.target.classList[1] === "del"){
                    parent.removeChild(e.path[1]);
                    // delete people.people[people.people.indexOf(itemToDel)];
                    // people.people = people.people.filter(item => item);
                }
            })
        }
    }
    people.init();
})()
