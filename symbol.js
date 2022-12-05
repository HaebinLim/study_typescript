"use strict";
/*
  Symbol
  프리미티브 타입의 값을 담아서 사용
  고유하고 수정 불가능한 값으로 만들어 줌
  접근을 제어하는데 주로 사용
*/
console.log(Symbol('foo') === Symbol('foo')); // false
const sym = Symbol();
const obj = {
    sym: '접근 가능',
    [sym]: '접근 막기',
};
obj['sym'];
obj[sym];
