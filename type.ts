// ------------------------------infer types (implicit types)------------------------;

let userName = "Darsan";
let num = 10;

//------------------------------ defining types (explicity types)---------------------;

let username: string = 'dinesh';
let age: number = 10;
let isAdmin: boolean = true;
let skill: string[] = ['ts', 'js', 'node'];
let count: number[] = [1, 2, 3];
let empty: [] = [];
let userDtail: { name: string; age: number } = {
    name: "darsan",
    age: 10
}

// ------------------------------ interface ------------------------------------------=;

interface Userdetail {
    name: string;
    age?: number;  // optional ?;
    email: string;
    phone: number;
    getName?: () => void;
}

let userDtails: Userdetail = {
    name: 'darsan',
    email: 'darsan@gmail.com',
    phone: 12123,
    getName() {
        console.log('name of the user is :', this.name)
    },
}

// union in ts to add more than one type in single field;

let skills: (number | string | boolean)[] = ["ts", "js", 10, 12, false];

// ------------------------------ funciton -------------------------------------------;


type Details = {
    name: string;
    age: number | string;
    email?: string;
    getName?: () => void
}

let userDetails: Details = {
    name: 'daran',
    age: 10,
}

function getUserDetails(userDetails: Details): string | number {
    return userDetails.age;
}

getUserDetails(userDetails)


// ------------------------------Named types ----------------------------------------;

type StatusType = 'pending' | 'accepted' | 'rejected';

let currentStatus: StatusType = 'pending';


// ------------------------------funciton overloading -------------------------------;

function add(num1: string | number, num2: string | number): string | number {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    return num1 + num2;
}

console.log(add(2, 2)); // 4;
console.log(add('2', '2')); // 22;


function addNumbers(num1: string, num2: string): string;
function addNumbers(num1: number, num2: number): number;
function addNumbers(num1: any, num2: any): any {

}

console.log(addNumbers(2, 2)); // 4;
console.log(addNumbers('2', '2')); // 22;

// ------------------------------ Generic (used insted of function overloading) -----;

function getAge<T>(age: T): T {
    return age
}

getAge('20');
getAge(20);

type UserDetail = {
    name: string;
    age: number
}

type AdminDetail = {
    firstName: string;
    role: string
}

const userDetail: UserDetail = {
    name: 'darsan',
    age: 10,
}

const adminDetails: AdminDetail = {
    firstName: 'admin',
    role: 'admin'
}

function getDetails<T>(details: T): T {
    return details
}

const userData = getDetails<UserDetail>(userDetail);
const adminData = getDetails<AdminDetail>(adminDetails)

// -------------------------------how to merge two types-------------------------------------;
//----------------------------types------------

type UserData = {
    name: string;
    age: number
}

type AdminData = UserData & {
    role: string
}

//-----------------------------interface------------

interface User {
    name: string;
    age: number
}

interface Admin extends User {
    role: string
}

// ----------------------------enum------------------------------;

enum StatusTypes {
    PENDING,
    COMPLETED,
    FAILED
}

function getStatus(orderId: string, status: StatusTypes) {
    console.log(orderId, '====', status);
}

getStatus('1234', StatusTypes.FAILED)


// -------------------------------- as const (type casting)---------;

let userAddress = 'payyanur' as const;

// userAddres = 'kannur';  // we cannot rediclare the varibale 

// -------------------------------- utility types ------------------;

type UserDetails = {
    name: string,
    age: number,
}

const userDatas: Readonly<UserDetails> = {   // Readonly , Omit, Pick, Required, Partial - this all are the utility types 
    name: 'name',
    age: 10
}

// userDatas.name = 'hello' // we cannot assign value to name because it is readonly







