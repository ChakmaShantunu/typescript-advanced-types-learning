
type GenericArray<T> = Array<T>

const friends: GenericArray<string> = ['shantunu', 'supta', 'sadhana'];
const rolleNumber: GenericArray<number> = [10, 20, 30];
const isElligible: GenericArray<boolean> = [true, false, true];

type Coordinates<x, y> = [x, y];
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ['20', '30'];
const mixCoordinates: Coordinates<number, string> = [20, '30'];