console.log("..................................................");
class Circle{
 constructor(radius,color){
    this.radius=radius;
    this.color=color;
 }
 Circle(radius){
    
    return "radius:",radius;
 }
 Circle(radius,color){
    
   return        (`radius:${radius},
                   color:${color}`);
 }
 getRadius(){
       return this.radius;
 }
 setRadius(radius){
        console.log(radius);
 }
 getColor(){
    return this.color;
}
setColor(color){
     console.log(color);
}
getArea(radius){
    return Math.PI*Math.pow(radius,2)
}
getCircumference(radius){
    return 2*Math.PI*radius;
}
}
const c = new Circle(5);
console.log("single arguments",c);
console.log("radius:",c.getRadius());
c.setRadius(6);
const c1= new Circle(5,"red");
console.log("Double arguments",c1);
console.log("color:",c1.getColor());
c1.setColor("Green");
console.log("Area:",c.getArea(10).toFixed(2));
console.log("Circumference:",c.getCircumference(20).toFixed(2));