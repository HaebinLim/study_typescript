let x: [string, number];

x = ['hello', 99]; // 타입, 순서, 길이 다 맞아야함
x = [10, 'xxx']; // Error
x[2] = 'g';      // x에는 index 2 없음

const person: [string, number] = ['h', 33];
const [first, second, third] = person;