// // // let name: string = "Akshat";
// // // let age: number = 20;

// // // console.log(name);
// // // console.log(age);
// // // function greet(person: string): string {
// // //     return `Hello, ${person}!`;
// // // }
// // // function delayedcall(fn:()=>void){
// // //     setTimeout(fn, 1000);
// // // }
// // // function x() {
// // //     console.log("Hello World");
// // // }
// // // delayedcall(() => x());

// // // make a function which takes first nam and greets the person with their full name
// // function greetFullName(firstName: string, lastName: string): string {
// //     console.log(`Hello, ${firstName} ${lastName}`);
// //     return `Hello, ${firstName} ${lastName}`;
// // }
// // console.log(greetFullName("Akshat", "Rawat"));

// // function greet(firstName: string) {
// //     console.log("Hello " + firstName);
// // }

// // greet("harkirat");

// // //sum of numbers!!!!!!!!////////
// // function sumOfNumbers(num1: number, num2: number): number {
// //     return num1 + num2;
// // }
// // console.log(sumOfNumbers(5, 10));

// //typescript ski strict safety features
// function firstelement(arr: number[]): number |undefined {
//     if(arr.length>0){
//         return arr[0];

//     }
//     return undefined;
// }
// let x = firstelement([1, 2, 3]);
// console.log(x);
// console.log(firstelement([]));

// //type error and type inference
// let y = firstelement([1, 2, 3]);
// // console.log(y);
// // console.log(firstelement([]));

// // let k : number = 1;
// // x=20;
// // console.log(k);
// // // x = "asddasdsa"; // ❌ Error! Red line under 'x'

// ////INTERFACES IN TYPESCRIPT ////

// // INTERFACE is a way to define the structure of an object in TypeScript. It allows you to specify the properties and their types that an object should have. Interfaces are useful for type-checking and ensuring that objects adhere to a specific shape.                                        
// interface user {
//     firstname:string ;
//     lastname : string;
//     email : string;
//     age : number;
// }

// // Assignment #1 – Function with Interface:

// function islegal(u:user): boolean {
//     if(u.age>=18){
//         return true;
//     }
//     return false;
// }

// //implementation interfaces in classes 

// interface User {
//     firstname: string;
//     lastname: string;
//     email: string;
//     age: number;
// }

// // Implementation of interface in class
// class UserDetails implements User {
//     firstname: string;
//     lastname: string;
//     email: string;
//     age: number;

//     constructor(firstname: string, lastname: string, email: string, age: number) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.email = email;
//         this.age = age;
//     }

//     islegal(): boolean {
//         if (this.age >= 18) {
//             return true;
//         }
//         return false;
//     }
// }

// const u1 = new UserDetails("Akshat", "Rawat", "akshat@example.com", 20);

// console.log(u1);
// console.log(u1.islegal()); // true

//**********************-----------------*************
//typescript checks your code before it is compiled to javascript and then run on nodejs server.
// whereas zod checks your code at runtime and throws errors if there are any issues.  
import { z } from "zod";
import express from "express";
const app = express();
app.use(express.json());

// Define a Zod schema for user validation
const userschema = z.object({
  username: z.string().min(3, {
    message: "username must be at least 3 characters long"
}),
    password:z.string().min(6, {message:"password must be at least 6 characters long"}),

});
//generate typescript types from zod schema
type userinput = z.infer<typeof userschema>;

// Define a route to handle user registration
app.post("/signup", (req, res) => {
    const body = req.body;
    //runtime validation using zod
    const result = userschema.safeParse(body);
    if (!result.success) {
        return res.status(400).json({ error: result.error.issues

         });
    }
    // If validation passes, you can proceed with further processing (e.g., saving to a database)
    const user: userinput = result.data;
    // For demonstration purposes, we'll just return the validated user data
    res.status(200).json({ message: "User registered successfully", user });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});