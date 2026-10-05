// class Test{
//     myName = "Mahii";
//     m1(){
//         console.log("i am m1 method myName=",this.myName);
//     }
// }
// let t = new Test();
// t.m1();




// class test{
//     myName="Mahii";
//     m1(){
//         console.log("my Name inside m1=",this.myName);
//     }
// }
// t=new test();
// t.m1();
// console.log("my Name outside=",t.myName);




// class test{
//     myName="Hero";
// }
// class test2{
//     m2(){
//         let t1=new test();
//         console.log("im method of test2",t1.myname);
//     }
// }
// let t2=new test2();
// t2.m2();




// class student{
//     displaydetais(){
//         console.log("my name is",this.name);
//         console.log("my age is",this.age);
//         console.log("my course is",this.course);
//     }
// }
// let s1=new student();
// s1.myname="mahii"
// s1.myage=21;
// s1.mycourse="python";
// console.log("student 1 details")
// s1.displaydetais();
// let s2=new student();
// s2.myname="zero";
// s2.myage=22;
// s2.displaydetaismycourse="javaa"
// console.log("student 2 details");
// s2.displaydetais();






// class student{
//     set_Data(name,age,course){
//         this.myname=name;
//         this.myage=age;
//         this.mycourse=course;
//     }
//     displayDetails(){
//         console.log("My name is",this.myname);
//         console.log("My age is",this.myage);
//         console.log("My course is",this.mycourse);
//     }
// }
// let s1=new student();
// s1.set_Data("Mahii",21,"python");
// s1.displayDetails();






// class bank{
//     static bank_name="inno bank";
//     set_data(ac_no,ac_hd_name,ac_blc){
//         this.myacno=ac_no;
//         this.myacname=ac_hd_name;
//         this.myacblc=ac_blc;
//     }
//     displaydetails(){
//         console.log("account name",bank.bank_name);
//         console.log("account number",this.myacno);
//         console.log("account holder name",this.myacname);
//         console.log("account balance",this.myacbal);
//     }
// }
// let user1=new bank();
// console.log("---Account holder 10---");
// user1.set_data(101,"Mahii1,9387636")
// user1.displaydetails();

// let user2=new bank();
// console.log("---Account holder 20---");
// user1.set_data(102,"Mahii2,3287636")
// user1.displaydetails();


// let user3=new bank();
// console.log("---Account holder 30---");
// user1.set_data(103,"Mahii1,2287636")
// user1.displaydetails();

