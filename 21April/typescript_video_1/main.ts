export {}
let message ='Hello World';
console.log(message);

let x= 10;
const y=20;

let sum ;
const title = 'Codevolution';

let isBeginner: boolean = true;
let total:number = 0;
let name:string= 'Vishwas';

let sentence:string = `My name is ${name}
 I am beginner in Typescript`;
console.log(sentence);

let n:null =null;
let u:undefined = undefined;

let isNew:boolean =null;
let myName:string = undefined;

let list1:number[] = [1,2,3];
let list2:Array<number> = [1,2,3];

let person1: [string, number] = ['Chris', 22];
enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green;
console.log(c);


let randomValue:any=10;
randomValue=true;
randomValue = 'Vishwas';

let myVariable: unknown = 10;

// console.log(myVariable.name);
// myVariable();

function hasName(obj:any):obj is {name:string}{
    return !!obj &&
    typeof obj ==="object" &&
    "name" in obj
}

// (myVariable as string).toUpperCase();

let a;
a=10;
a=true;

let b=20;

let multitype : number | boolean;
multitype = 20;
multitype = true;

let anyType:any;
anyType = 20;

function add(num1:number, num2?:number):number{
    if(num2)
    return num1 + num2;
    else
    return num1;
}
add(5, 10);
add(5);

interface Person{firstName:string, lastName:string}

function fullName(person:Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName:'Bruce',
    lastName:'Wayne'
};

fullName(p);

class Employee{
    protected employeeName:string;
    constructor(name:string){
        this.employeeName=name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('Vishwas');
// console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName);
    }
    delegateWork(){
        console.log('Manager delegating tasks');
    }
}

let m1 = new Manager('Bruce')
m1.delegateWork();
m1.greet();
// console.log(m1.employeeName);