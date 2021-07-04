(function(){
    const people = {
        people: [],
        init: function(){
            this.cacheDom();
        },
        cacheDom: function(){
            this.el = document.querySelector("#people");
            this.btn = this.el.querySelector("#addPerson");
            this.pinfo = document.querySelector(".personinfo");
            console.log(this.el);
            // console.log(this.btn);
            // console.log(this.pinfo);
        }
    }
    people.init();
})()