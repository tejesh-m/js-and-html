console.log('sy1')
let name = "kiran"
debugger;
let age
age = 65;

console.log(name + " " + age);
//types of variables
var marks = 90;
console.log(marks);
{
    const a = 67;
    const b = 70;
    var num = 100;
    //the scope var varible stays inside a function
    function add() {
        var c = a + b;
        console.log("addition value is:" + c);
    }
    add();
    function sub() {
        var c = a - b;
        console.log("substraction value is:" + c);
    }
    sub();
    function multiply() {
        var c = a * b;
        console.log("multiplication value is:" + c);
    }
    multiply();
    function division() {
        var c = a / b;
        console.log("division value is:" + c);
    }
    division();
    function mod() {
        var c = a % b;
        console.log("mod value is:" + c);
    }
    mod();
    console.log("post fix increment " + num++);
    console.log(num);
    console.log("post fix decrement " + num--);
    console.log(num);
    console.log("pre fix increment " + ++num);
    console.log(num);
    console.log("pre fix decrement " + --num);
    console.log(num);


    let hello;
    //alert(!hello); //not logical operator uses doesnot

    //and operator
    alert(5 && 10 && 80); //and operator gives us bigger number

    // or operator
    console.log(10 || 50 || 100); //or operator gives us smaller number

    //array
    const names = ["Raj", "SUnil", "yeswant"];
    names[3] = "suman";
    names[0] = "NTR";
    console.log(names);

    const food = [];
    food[0] = "pasta";
    food[1] = "pizza"

    const menu = [...food, "biryani", "parota", "prawns"];
    console.log(menu);

    const marks = [12, 100, 200, 222];
    let maxMark = Math.max(marks);
    console.log(maxMark);

    const students = new Map([
        ["Tejesh", 27],
        ["Hitesh", 37],
        ["Venkatesh", 32]
    ]);
    students.set("Vijay", 33)//set method allows us to add key value pair after setting the data

    console.log(students);
    console.log(students.get("Tejesh")); //get allows us to retrieve data

    for (let index = 0; index < menu.length; index++) {
        console.log(menu[index]);
    }

    if (menu.length > 10) {
        console.log("We have more than 10 food items");
    } if (menu.length == 20) {
        console.log("We have more than 10 food items");
    } else {
        console.log("We have less than 10 food items");
    }

    switch(menu.length){
        case 0 : console.log("no items in menu");
        break;
        case 1 : console.log("1 items in menu");
        break;
        case 2 : console.log("2 items in menu");
        break;
        case 3 : console.log("3 items in menu");
        break;
        case 4 : console.log("4 items in menu");
        break;
        case 5 : console.log("5 items in menu");
        break;
        case 6 : console.log("6 items in menu");
        break;
        case 7 : console.log("7 items in menu");
        break;
        case 8 : console.log("8 items in menu");
        break;
        default : console.log("more than 8 items");
    }

//arrow function

function Area(num1 , num2){
    console.log(num1*num2);
    return num1*num2;
}

//traditional way to write a function
Area(70,50);

area1 =(num1,num2) =>{
    console.log(num1*num2);
    return num1*num2;
}//arrow function
area1(10,50);

//set is JS collection which can store only unique values
const id_no = new Set([12,13,14,15,12,16,17,14]);
id_no.add(122);
id_no.delete(12);

console.log(id_no);
console.log(id_no.has(14));

const employee_details = new Map([
    ["Hitesh",010],
    ["Venkatesh",007],
    ["Srikant", 010],
    ["Sumedh" , 001],
    ["Tejesh",005]
]);
console.log(employee_details);

const emp_id = new Set([12,13,14,15,12,16,17,14]);
console.log(emp_id)

var promise = new Promise(function(resolve, reject){
    const passingMarks = 500;
    const securedMarks =600;

    if(passingMarks <= securedMarks){
        resolve()
    }else{

    reject()
    }
})
promise.then(function(){
    console.log("congrats you have passed the exam");
}).catch(function(){
    console.log("Try again next year, work harder, all the best")
})

async function sayMyName(){
    const response = await fetch("https://api.github.com/users")
    console.log("before response");
    const users = await response.json();
    console.log("users resolved");
    return users;
}
console.log("before calling sayMyName text");
let say = sayMyName();

console.log("after calling sayMyName text");
say.then(users=>console.log(users))
console.log(say);
console.log("last calling sayMyName text");
}

//console.log(a);