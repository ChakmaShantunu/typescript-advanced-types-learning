
let value: any = 'Hello TypeScript';

let strLength: number = (value as string).length;

console.log(strLength);

interface user {
    name: string;
    age: number;
}

let data = {
    name: 'shantunu',
    age: 30
}

const user = data as user;
console.log(user);