// class test{
//     constructor(myname){
//         console.log("my name is",myname);
//     }
// }
// let t=new test(constructor);





// class test{
//     constructor(fname){
//         return fname;
//     }
// }
// let t=new test("constructor");
// console.log(t);






// class employee{
//     constructor(name,desgination,salary){
//         this.myname=name;
//         this.mydesgination=desgination;
//         this.mysalary=salary;
//     }
//     displaydetails(){
//         console.log("my name",this.myname);
//         console.log("my desgination",this.mydesgination);
//         console.log("my salary",this.mysalary);
//     }
// }
// let e=new employee("mahii","politlican",893930);
// e.displaydetails();









class BusReservation{
    static busCompanyName="Raavi Travels";
    static totalBookings=0;
    
    constructor(passengerName, ticketId, destination, seatNo, fare){
        this.passengerName=passengerName;
        this.ticketId=ticketId;
        this.destination=destination;
        this. seatNo=seatNo;
        this. fare= fare;

        BusReservation.totalBookings++
    }
    displayDetails(){
        console.log("busCompanyName:", BusReservation.busCompanyName);
        console.log(" totalBookings:", BusReservation.totalBookings);
        console.log("passengerName:",this.passengerName);
        console.log("ticketId:",this.ticketId);
        console.log(" destination:",this.destination);
        console.log("seatNo:",this.seatNo);
        console.log(" fare :",this.fare);
        console.log("======================");
        
    }
}
    let n1=new BusReservation("Mahii",112233,"Ponnur",32,200)
    let n2=new BusReservation("Tulasi",555321,"Hyderabad",90,600)
    let n3=new BusReservation("sai",245111,"Chennai",87,400)
    let n4=new BusReservation("Tanmai",890833,"Amaravati",76,100)
    let n5= new BusReservation("Avinash",1981144,"goa",19,500)

    n1.displayDetails()
    n2.displayDetails()
    n3.displayDetails()
    n4.displayDetails()
    n5.displayDetails()
