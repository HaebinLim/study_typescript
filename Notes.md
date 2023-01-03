
# 타입스크립트란 무엇인가
- 자바스크립트에 타입이라는 개념을 적용시킨 것
- programming language 언어
- compiled language (Transpile이라는 용어 사용하기도 함)
- 타입스크립트: Static Types 개발하는 중간에 타입 체크
- 자바스크립트: Dynamic Types 런타임에 돌입해야만 오류 알수있음


## 설치 및 설정

<br />

# Basic Types
타입스크립트에서 프로그램 작성을 위해 기본 제공하는 데이터 타입
- 자바스크립트 기본 자료형
  - Boolean
  - Number
  - String
  - Null
  - Undefined
  - Symbol
  - Array: object형
- 몇가지 타입 더
  - Any, Void, Never, Unknown
  - Enum
  - Tuple: object형
  
<br />

## Primitive Type
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
```
let name = 'h';
```
- 프리미티브 형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분
```
name.toString();
```
- 리터럴 값으로 프리미티브 타입의 서브 타입을 나타낼 수 있음
```
3.14; // Number 타입의 서브타입
```
- 래퍼 객체로 만들 수 있음
```
new Boolean(false);   // typeof new Boolean(false) : 'object'
```

### Boolean

```
let isDone: boolean = false;
isDone = true;

console.log(typeof isDone); // boolean
```
### Number
### String
### Null
### Undefined
### Symbol

<br />

## object
- primitive type이 아닌 것


### Array
### Any
### Void
### Never
### Unknown
### Enum
### Tuple

<br />
  

# 타입 시스템

- 타입을 명시적으로 지정할 수 있음
- 타입을 명시적으로 지정하지 않으면, 자동으로 타입을 추론

<br />

## 타입스크립트는 structural type system을 따른다

### structural type system - 구조가 같으면, 같은 타입이다

```
interface IPerson {
  name: string;
  age: number;
  speak(): string;
}

type PersonType = {
  name: string;
  age: number;
  speak(): string;
}

let personInterface: IPerson = {}
let personType: PersonType = {}
```
같은 구조를 가지는 경우 대입할 수 있다
```
personInterface = PersonType;
personType = personInterface;
```
<br />

### nominal type system - 구조가 같아도 이름이 다르면, 다른 타입이다
<br />

### duck typing - 어떤 새가 오리 처럼 걷고 울면, 그 새를 오리라고 부를 것이다 라는 철학을 가지고 처리한댕

<br />

## 타입 호환성

### 서브 타입
1. 같거나 서브 타입인 경우 할당이 가능하다 = 공변
2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우 할당이 가능하다 = 반병

<br />

## 타입 별칭