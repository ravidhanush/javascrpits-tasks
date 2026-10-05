class parent{
    m1(){
        console.log("m1 from parent")
    }
}
class child1 extends parent{
    m2(){
        console.log("m2 from child")
    }
}
class child2 extends parent{
    m3(){
        console.log("m2 from child1")
    }
}
let first=new child1()
first.m2();
first.m1();
first.m3();