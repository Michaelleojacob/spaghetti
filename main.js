(function(){
    "use strict";
    const people = {
        people: [],
        init: function(){
            this.cacheDom();
            this.pushToArr();
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
                if(personinfo.value !== ""){people.people.push(personinfo.value)};
                personinfo.value = '';
                people.renderToPage(people.people);
            });
        },
        renderToPage: function(arr){
            //take each element from people.people arr and display them on the page
            const personli = document.createElement("li");
            personli.textContent = arr[arr.length-1];
            this.ul.appendChild(personli);
            //add delbtn
            const delbtn = document.createElement("span");
            delbtn.textContent = "x"
            personli.appendChild(delbtn);
        },

    }
    people.init();
})()