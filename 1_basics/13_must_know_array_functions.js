/**
 * Array Functions
 */
let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembers);
console.log("----------------");

// push()
iveMembers.push("코드팩토리");
console.log(iveMembers);
console.log(iveMembers.push("코드팩토리"));
console.log("----------------");

// pop()
console.log(iveMembers.pop());
console.log(iveMembers);
console.log("----------------");

// shift() : 맨 처음꺼 제거
console.log(iveMembers.shift());
console.log(iveMembers);
// unshift() : 맨 처음꺼 추가
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);

// splice(n,m): n번부터 m-1까지 삭제
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

