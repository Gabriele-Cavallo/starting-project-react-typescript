// Primitive: number, string, boolean, null, undefined
// More complex types: arrays, object
// Function types, parameters

// Primitives

let age: number = 24;

age = 12;

let userName: string = 'Marco';

let isInstructor: boolean = false;

// More complex types

let hobbies: string[];

hobbies = ['sport', 'cooking'];

let numbers: number[];

numbers = [2, 3];

let boolean: boolean[];

boolean = [true, false];

type Person = {
    name: string | string[];
    age: number;
};

let person: Person;
// let person: {
//     name: string | string[];
//     age: number;
// };

person = {
    name: 'Max',
    age: 30
};

let people: Person[];
// let people: {
//     name: string;
//     age: number;
// }[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 1234;

// Functions & types

function add(a: number,b: number): number {
    return a + b;
}

// Void return
function printOutput(value: any) {
    console.log('value' , value);
}

// Generics
function insertAtBeggining<T>(array: T[], value: T) {
    const newArray = [value,...array];
    return newArray;
};

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeggining(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeggining(['a', 'b', 'c'], 'd');

updatedArray[0].split('');