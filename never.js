"use strict";
/*
  never
  보통 return에 사용
  모든 타입의 subtype, 모든 타입에 할당 할 수있음
  never에는 어떤 것도 할당할 수 없음
  @_@
  any 조차 never에게 할당 할 수 없음
  잘못된 타입을 넣는 실수를 막고자 할 때 사용
*/
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) { }
}
let a = 'hello';
if (typeof a !== 'string') {
    a; // 잘못된 타입 넣는 실수를 막음
}
if (typeof b !== 'string') {
    b; // 특정 타입이 되도록 가드
}
