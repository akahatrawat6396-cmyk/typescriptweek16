let name: string = "Akshat";
let age: number = 20;

console.log(name);
console.log(age);
function greet(person: string): string {
    return `Hello, ${person}!`;
}
function delayedcall(fn:()=>void){
    setTimeout(fn, 1000);
}
function x() {
    console.log("Hello World");
}
delayedcall(() => x());
