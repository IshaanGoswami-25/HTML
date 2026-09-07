console.log("Hello World!");

let a = "another variable";
console.log(a)
const b = 78;
console.log(b);
console.log(a[4])
console.log(a.length)
console.log(a[a.lenght - 2]);
let c = a.slice(2,7);
console.log(c)


let d = a+b;
console.log(d)

let city = "kanpur";

let about = "i live in "+city;
let newAbout = 'i live in ${city}';
console.log(newAbout)

const users = [{name: "Ishaan", age:"20", gender:"male"}, {name: "Kartikey", age:"5", gender:"Prefer not say"}]

for(let user of users){
    console.log(user)
}

function greet(){
    console.log("Good Morning!!");
}

greet();

function sum(a,b){
    return a+b;
}

console.log(sum(2,5))

function find(arr,target){
    for(let i = 0; i < arr.length;i++){
        if(arr[i] == target){
            return i
        }
    }
    return -1
}

let arr = [1,2,5,8,3,6,9]
let res = find(arr,5);
console.log(res)

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

