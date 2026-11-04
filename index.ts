// // let name: string = "Akshat";
// // let age: number = 20;

// // console.log(name);
// // console.log(age);
// // function greet(person: string): string {
// //     return `Hello, ${person}!`;
// // }
// // function delayedcall(fn:()=>void){
// //     setTimeout(fn, 1000);
// // }
// // function x() {
// //     console.log("Hello World");
// // }
// // delayedcall(() => x());

// // make a function which takes first nam and greets the person with their full name
// function greetFullName(firstName: string, lastName: string): string {
//     console.log(`Hello, ${firstName} ${lastName}`);
//     return `Hello, ${firstName} ${lastName}`;
// }
// console.log(greetFullName("Akshat", "Rawat"));

// function greet(firstName: string) {
//     console.log("Hello " + firstName);
// }

// greet("harkirat");

// //sum of numbers!!!!!!!!////////
// function sumOfNumbers(num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(sumOfNumbers(5, 10));

//typescript ski strict safety features
function firstelement(arr: number[]): number |undefined {
    if(arr.length>0){
        return arr[0];

    }
    return undefined;
}
let x = firstelement([1, 2, 3]);
console.log(x);
console.log(firstelement([]));

//type error and type inference
let y = firstelement([1, 2, 3]);
console.log(y);
console.log(firstelement([]));

let k : number = 1;
x=20;
console.log(k);
// x = "asddasdsa"; // ❌ Error! Red line under 'x'