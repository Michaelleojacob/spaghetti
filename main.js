(function(){
    const people = {
        people: [],
        init: function(){
            this.cacheDom();
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
        render: function(){
            
        },
    }
    people.init();
})()