// class a{
//     m1(){
//         console.log("m1 from A")
//     }
// }
// class b extends a{
//     m2(){
//         console.log("m2 from b")
//     }
// }
// class c extends b{
//     m3(){
//         console.log("m3 from c")
//     }
// }
// let C=new c()
// C.m3()
// C.m2()
// C.m1()



class bankaccount{
    constructor(accnum,acchldname){
        this.accnum=accnum;
        this.acchldname=acchldname
    }
    displaydetails(){
        console.log("account number:",this.accnum);
        console.log("account holdername:",this.acchldname.acchldname)

    }
}
class bankblc extends bankaccount{
    constructor(accnum,acchldname,accblc){
        super(accnum,acchldname)
        this.accblc=accblc

    }
    displaybankdetails(){
        super.displaybankdetails()
        console.log("account balance:")
    }
    
}