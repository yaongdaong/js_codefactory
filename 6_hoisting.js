/**
 * hoisting
 */
console.log("hello");
console.log("world");
// console.log(name); //변수 선언 후 값 할당 전에 출력하면 undefined
// var name = "코드팩토리";
// console.log(name);

/**hoisting은 무엇인가
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */
var name;
console.log(name);
name = "코드팩토리";
console.log(name);

// let과 const도 hoisting이 된다(그치만 에러가 뜸,var는 호이스팅 에러안남)
console.log(yuJin); //ReferenceError: Cannot access 'yuJin' before initialization
// let yuJin = "안유진"; //ReferenceError: yuJin is not defined
