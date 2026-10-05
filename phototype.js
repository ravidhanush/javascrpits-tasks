var person={
    name:"Mahi",
    age:21,
};
var abc = {
    talk:()=>{
        console.log("i am talk method from abc");
    },
};
person.__proto__=abc;

var xyz = {
    walk:()=>{
        console.log("i am walk method in xyz");
    },
};
abc.__proto__ = xyz;
console.log(person);