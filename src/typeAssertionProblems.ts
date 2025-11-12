// 👉 এটাকে number হিসেবে assert করে console এ num + 8 প্রিন্ট করো।

let num: any = "42";
let number = num as number;

console.log(Number(number) + 8);


// 👉 এটাকে string হিসেবে assert করে এর first 3 letter বের করো।
let random: unknown = "Shantunu Chakma";

let developer = (random as string).slice(0, 3);
console.log(developer);

// 👉 Type assertion ব্যবহার করে data কে User হিসেবে ধরো এবং user.name প্রিন্ট করো।
interface User {
  name: string;
  age: number;
}

const data = {
  name: "Ersa",
  age: 18,
  skill: "React"
};

const user = data as User;
console.log(user.name);