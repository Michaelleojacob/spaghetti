(function(){
    "use strict";
    const people = {
        people: [],
        init: function(){
            this.cacheDom();
            this.pushToArr();
            // this.renderToPage(people.people);
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
            //remove all prior people
            console.log(people.ul);
            while(this.ul.lastElementChild) {
                this.ul.removeChild(this.ul.lastElementChild);
            }
            //take each element from people.people arr and display them on the page
            arr.forEach(element => {
                //display element to page as li
                const personli = document.createElement("li");
                personli.textContent = element;
                this.ul.appendChild(personli);
            });
        },
    }
    people.init();
})()