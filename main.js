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
            // console.log(this.el);
            // console.log(this.ul);
            // console.log(this.btn);
            // console.log(this.pinfo);
        },
        pushToArr: function(){
            const personinfo = this.pinfo;
            this.btn.addEventListener("click", function(e){
                if(personinfo.value !== ""){people.people.push(personinfo.value)};
                // console.log(people.people);
                personinfo.value = '';
                people.renderToPage(people.people);
            });
        },
        renderToPage: function(arr){
            //take each element from people.people arr and display them on the page
            console.log(arr);
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