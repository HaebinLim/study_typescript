"use strict";
/*
  any
  어떤 타입이어도 상관없는 타입
  최대한 쓰지 않기 (컴파일 타임 타입 체크가 정상적으로 이루어지지 않기 때문)
  any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션 nolmplicitAny
*/
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny('리턴은 아무거나');
any1.toString();
// any는 개체를 통해 전파. 타입 안정성을 잃는다.
let looselyTyped = {};
const d = looselyTyped.a.b.c.d; // 에러 안남
function leakingAny(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 0 });
c.indexOf('0');
