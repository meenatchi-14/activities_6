console.log("..................................................");
console.log(" A class to calculate the uber price");
class Uber{
    constructor(cust_name,pickUP,driverName,vehicle,Drop,Distance,timing,payment){
        this.cust_name=cust_name;
        this.pickUP=pickUP;
        this.driverName=driverName;
        this.vehicle=vehicle;
        this.Drop=Drop;
        this.Distance=Distance;
        this.timing=timing;
        this.payment=payment;
    }
 getCustomerDetails(){
 console.log(`
              Customer_Name:${this.cust_name},
                     pickUP:${this.pickUP},
                 DriverName:${this.driverName},
                    Vehicle:${this.vehicle},
                       Drop:${this.Drop},
                    Distance:${this.Distance}KM,
                     timing:${this.timing}mins,
                    payment:${this.payment};
            `)
 }
getCalFare(){
          const Base_Fare=30;
        const Cost_per_minute=2;
        const time_in_ride=this.timing;
        const Cost_per_mile=10;
        const ride_distance=this.Distance;
        const Booking_Fee=10;
       return Base_Fare + (Cost_per_minute * time_in_ride) + (Cost_per_mile * ride_distance) + Booking_Fee;

    }

}
var customer=new Uber("Madhu","ayanavaram","Raj","Car","koyambedu",7.5,30,"readycase");
customer.getCustomerDetails();
var fare=customer.getCalFare();
console.log(`Your payment amount: RS.${fare}`);