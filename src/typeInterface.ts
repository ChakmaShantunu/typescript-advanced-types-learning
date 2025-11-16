
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

interface IUserWithRole extends IUser{
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