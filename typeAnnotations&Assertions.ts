//* Type Anotations
let n: number;
let b: boolean;
let s: string;
let a: any;
let array: number[] = [1,2,3];

//*Enums

enum Colors {Red = 0, Green = 1, Blue = 2};
let backgroundColor = Colors.Red;


/*
* Type Assertions 
    Sometimes TypeScript gets confused with the type of a variable.
    If we are dealing with a variable of type any, we have to explicitly tell TypeScript the
    type of variable. This is what we call Type Assertions.

    Type Assertions do not change the nature of the variable. It is just a way to indicate the 
    TypeScript compiler about the type of a variable so we can access the IntelliSense
 */

let message;
message = 'abc';
let endsWith = (<string>message).endsWith('c');
let alternativeTypeAssertion = (message as string).endsWith('c');