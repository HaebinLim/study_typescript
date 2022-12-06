"use strict";
/*
  object
  primitive type이 아닌 것을 나타낸다.
*/
const person1 = { name: 'haebin', age: 33 };
// person1 is not object type.
// person1 is "{ name: string, age: number }" type.
const person2 = Object.create({ name: 'haebin', age: 33 });
let obj2 = {};
obj2 = { name: 'haebin' };
obj2 = [{ name: 'haebin' }];
// Error
obj2 = 39;
obj2 = '';
obj2 = true;
obj2 = Symbol();
obj2 = null;
obj2 = undefined;
