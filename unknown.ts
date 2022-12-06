declare const maybe: unknown;

const aNumber: number = maybe;

if (maybe === true) {
  const aBoolean: boolean = maybe;
  const aString: string = maybe; // if문 안에 maybe는 true이기 때문에 오류
}

if (typeof maybe === 'string') {
  const aString: string = maybe;
  const aBoolean: boolean = maybe; // if문 안에 maybe는 string
}

/*
  unknown
  typescript 3.0부터 지원
  any와 짝으로 any보다 type-safe한 타입
    any와 같이 아무거나 할당 가능
    컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
    타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할수 없다
  unknown 타입을 사용하면 runtime error를 줄일 수 있다
  any를 쓰는 자리에 unknown을 쓰도록 노력하자
*/