class Employee{
    setEmployee(name, id, position){
        this.name=name;
        this.id=id;
        this.position=position;
    }
    getEmployeeName(){
        return this.name;
    }
    getEmployeeId(){
        return this.id;
    }
    getEmployeePosition(){
        return this.position;
    }
}// how to create classes in JS

let emp1 = new Employee();
//how to create objects for those classes in JS
let emp2 = new Employee();

emp1.setEmployee("Hitesh", 100, "Software Engineer");
emp2.setEmployee("Srikanth", 101, "Automation Engineer");

console.log(emp1.getEmployeeName());
console.log(emp1.getEmployeeId());
console.log(emp1.getEmployeePosition());
