function Employee(name, age, baseSalary){
    this.name=name;
    this.age=age;
    this.baseSalary=baseSalary;
    this.monthlyBonus=10000;

    this.calculateFinalSalary = function(){
        let finalSalary = this.baseSalary+this.monthlyBonus;
        console.log("final salary is: "+finalSalary);
    }

    this.getEmployeeDetails = function(){
        console.log("Name: "+this.name+ ", Age: "+this.age+", BaseSalart: "+this.baseSalary);
    }
}
let emp1 = new Employee("Venkatesh", 25, 100000);
emp1.getEmployeeDetails();
emp1.calculateFinalSalary();