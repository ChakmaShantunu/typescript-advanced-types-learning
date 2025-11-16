
type User = {
    name: string;
    age: number;
}

// with interface

interface IUser {
    name: string;
    age: number
}

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role

interface IUserWithRole extends IUser {
    role: 'admin' | 'user'
}

const user1: IUserWithRole = {
    name: 'MR. Shantunu',
    age: 30,
    role: 'admin'
}

const user2: IUser = {
    name: "MRS. Supta",
    age: 23,
}

// interface using in function

type Add = (num1: number, num2: number) => number

interface IAdd {
    (num1: number, num2: number) : number
}

const add: IAdd = (num1, num2) => num1 + num2

type Friends = string[]
const friends: Friends = ['a', 'b', 'c', 'd'];

interface IFriends {
    [index: number]: string
}