let a = 10;
let b = "hello";
let c = true;
let d = null;
let e;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

let numbers = [100,200,300]
let [x,y,z]=numbers;
console.log(x)
console.log(y)
console.log(z)

const student = {
    name:"Kim",
    age:"18",
    major:"Computer"
}
const {name,age,major}=student
console.log("이름:", name)
console.log("나이:", age)
console.log("전공:", major)

let arr1 = [1,2,3];
let arr2 = [...arr1, 4,5,6];
console.log(arr2);

function sumAll(...numbers){
    let sum=0;

    for(let n of numbers){
        sum+=n;
    }
    return sum;
}
console.log(sumAll(1,2,3,4,5))

const multiply=(a,b)=>{
    return a*b
}
console.log(multiply(3,4));

const numbers_1 =[1,2,3,4,5];
const result = numbers_1.map(num=>num*3)
console.log(result);

const numbers_2=[1,2,3,4,5,6,7,8];
const evenNumbers = numbers_2.filter(num=>num%2===0);
console.log(evenNumbers)

const numbers_3=[5,10,,15,20];
const sum=numbers_3.reduce((acc,cur)=>acc+cur,0);
console.log(sum);

const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruits=>{
    console.log(fruits);
})

