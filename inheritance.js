// class parent{
//     brave(){
//         console.log("i am brave")
//     }
//     talent(){
//         console.log("i am talented")
//     }
// }
// class child extends parent{
//     artist(){
//         console.log("i am artist")
//     }
// }
// let c=new child()
// c.artist()
// c.brave()






// class A{
//     m1(){
//         console.log("m1 from A-super");
//     }
// }
// class B extends A{
//     m2(){
//         console.log("m2 from B-super");
//       }
// }
// let b=new B()
// b.m2();
// b.m1()
//static variable





// class parent{
//     static ins_name="innomatics";
// }
// class child extends parent{}
// console.log("institute name using parent",parent.ins_name);
// console.log("institute name using child",child.ins_name);





// class product{
//     displayDetails(){
//         console.log("product name:",this.name);
//         console.log("product price:",this.price)
//     }
// }
// let p=new product()
// p.name="iphone"
// p.price=56745;
// p.displayDetails()




// class product{
//     constructor(name,price){
//         this.p_name=name;
//         this.p_price=price;
//     }
//     displaydetails(){
//         console.log("product name:",this.p_name)
//         console.log("product price:",this.price)
//     }
// }
// let p=new product("product1,50000")
// p.displaydetails()








//within class outside method
// class test{
//     fname="mahii";
// }
// class test2 extends test{}
// let t2=new test2();
// console.log("in child obj=",t2.fname);





// class test{
//     m1(){
//         this.fname="mahiii"
//     }
// }
// let t=new test();
// t.m1()
// console.log(t.fname)





//using constructor
class test{
    constructor(){
        this.fname="mahii";
    }
}
class test2 extends test{

}
let t2=new test2()
console.log()

