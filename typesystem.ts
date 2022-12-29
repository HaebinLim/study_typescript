// 타입이란 해당 변수가 할 수 있는 일을 결정
function f1(a) {
  return a;
}

// 함수 사용법에 대한 오해를 야기 
function f2(a) {
  return a * 38;
}
console.log(f2(10));	// 380
console.log(f2('ㅠㅠ'); // NaN

// 타입스크립트의 추론
// a의 타입을 명시적으로 지정하지 않은 경우 a는 any로 추론
// 함수 리턴 타입은 number (NaN도 number)

/*
noImplicitAny 옵션
타입을 명시적으로 지정하지 않은 경우
타입스크립트 추론 중 any가 판단되면 컴파일 에러
명시적으로 any로 지정하도록
error TS7006: Parameter 'a' implicity has an 'any' type.
*/

// number 타입으로 추론
function f4(a: number) {
  if (a > 0) {
    return a * 38;
  }
}
console.log(f4(5));	// 190
console.log(f4(-5) + 5);	// undefined + 5 => NaN


/* strictNullChecks 옵션
모든 타입에 자동으로 포함되어 있는
null과 undefined를 제거
*/

// number | undefined 타입으로 추론
function f4(a: number) {
  if (a > 0) {
    return a * 38;
  }
}
console.log(f4(5));	// 190
console.log(f4(-5) + 5); // error TS2532: Object is possibly 'undefined'


// 명시적으로 리턴 타입을 지정
function f5(a: number): number {
  if (a > 0) {
    return a * 38;
  }
  // 이 부분 리턴이 없어서 에러 error TS2366: Function lacks ending return statement and return type does not include undefined
}

/*noImplicityReturns 옵션
모든 코드에서 리턴을 직접
error TS7030: Not all code paths return a value
*/

//매개변수에 object가 들어오는 경우
function f6(a: { name: string; age: number }): string {
  return `이름은 ${a.name}`;
}
console.log(f6('ㅎ')); // error TS2345: Argument of type 'string' is not assignable to parameter of type '{ name: string; age: number; }'

// 나만의 타입을 만드는 방법
interface PersonInterface {
  name: string;
  age: number;
}

type personTypeAlias = {
  name: string;
  age: number;
}

function f7(a: PersonInterface): string {
  return `이름은 ${a.name}`;
}