const employee = [
    {
        id : 1,
        firstName : "ajay",
        lastName : "kushwah",
        department : {id:"102", name:"React"},
        email : "ajay@gmail.com",
        number : 9098263411,
     
    },

    {
        id : 2,
        firstName : "Tarun",
        lastName : "Sharma",
        department :{id:"101", name:"Wordpress"},
        email : "tarun@gmail.com",
        number : 8998263411,
     
    },

    {
        id : 3,
        firstName : "jaspreet",
        lastName : "singh",
        department : {id:"102", name:"React"},
        email : "jaspreet@gmail.com",
        number : 9065263411,
    },
    {
        id : 4,
        firstName : "Chirag",
        lastName : "Bajaj",
        department : {id: "103", name:"Angular"},
        email : "chirag@gmail.com",
        number : 9098263422,
     
    },
    {
        id : 5,
        firstName : "Bhagwati",
        lastName : "Batewera",
        department : {id:"103", name:"Angular"},
        email : "bhagwati@gmail.com",
        number : 9098265411,
     
    }

]    
export function getEmployee() {
    return employee;
}