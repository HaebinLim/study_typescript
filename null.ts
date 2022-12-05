// 할당할 수 있는게 없음
let u: undefined = undefined;
let n: null = null;
let un: undefined = null;  // (X)
let nu: null = undefined;  // (X)
let v: void = undefined;   // (O)

/*
  number에 null 또는 undefined를 할당할 수 없게 tsconfig.json에서 stricNullChecks 사용
  할당할 수 있게 하려면 union type 사용
  let union: number | null = null;
*/

/*
  null
  자바스크립트 런타임 typeof object

  undefined
  자바스크립트 런타임 typeof undefined
*/