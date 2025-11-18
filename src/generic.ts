
type GenericArray<T> = Array<T>


interface User {
    name: string;
    age: number;
}

const users: GenericArray<User> = [
    { name: 'shantunu', age: 30 }, { name: 'supta', age: 23 }
];
const friends: GenericArray<string> = ['shantunu', 'supta', 'sadhana'];
const rolleNumber: GenericArray<number> = [10, 20, 30];
const isElligible: GenericArray<boolean> = [true, false, true];

type Coordinates<x, y> = [x, y];
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ['20', '30'];
const mixCoordinates: Coordinates<number, string> = [20, '30'];


type GenericResponse<T, M> = {
    data: T;
    meta: M;
}

const response: GenericResponse<User[], { requestedId: string }[]> = {
    data: [
        { name: 'shantunu', age: 30 },
        { name: 'supta', age: 23 }
    ],
    meta: [
        { requestedId: '12' }, { requestedId: '234' }
    ]
}