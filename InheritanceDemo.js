class Car{
    // parent class
    setName(name){
        this.name=name;
        console.log(name);
    }
    drive(){
        console.log("the car named "+this.name+" is running");
    }
    stop(){
        console.log("this car named "+this.name+" is stopping");
    }
}
class Mercedes extends Car{
    // child class
    driver(driverName){
        console.log("this mercedes is being driven by: "+driverName);
    }
}
let w13 = new Mercedes();
w13.setName("F1 Car");
w13.drive();
w13.stop();
w13.driver("Lewis Hamilton");