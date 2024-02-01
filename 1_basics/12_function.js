/**
 * functino -> 함수
 */
/**
 * 만약에 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까
 */
console.log((((2 * 10) / 2) % 3).toString());
/**
 * dry(don't repeat yourself)
 */
function calculate() {
  console.log((((2 * 10) / 2) % 3).toString());
}
// calculate();
function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}
calculate(4);
