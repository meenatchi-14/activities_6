console.log( "A Person class to hold all the details.")
class Person{
    constructor(fName,lName,general,BirthYear,education,phoneNo,email,location,work){
        this.fName=fName;
        this.lName=lName;
        this.general=general;
        this.BirthYear=BirthYear;
        this.education=education;
        this.phoneNo=phoneNo;
        this.email=email;
        this.location=location;
        this.work=work;
    }
    getAge() 
        {
        return 2023-this.BirthYear;
        }
    getDisplay(){
        var Age=myDetails.getAge();
    console.log(`
    First Name : ${this.fName},
    Last Name:${this.lName},
    FullName:${this.fName+' '+this.lName},
    General:${this.general},
    BirthYear :${this.BirthYear},
    Age:${Age}
    Education:${this.education},
    Phone no:${this.phoneNo},
    Email:${this.email},
    Location:${this.location},
    Working:${this.work},
    `)
        }
        
}
var myDetails=new Person("Meenatchi","V","Female",1995,"B.E-CSE",8508409709,"meenatchicse@gmail.com","Chennai","studying");
         myDetails.getDisplay();
        
         
         
