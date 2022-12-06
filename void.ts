/*
  void
  어떤 타입도 가지지 않는 빈 상태 
  값을 반환하지 않는 undefined를 리턴하는 상태
*/

function returnVoid(message: string): void {
  console.log(message);
  return; // 리턴에 undefined만 가능함
}

const r = returnVoid('리턴이 없당');