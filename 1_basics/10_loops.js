/**
 * Loops
 *
 * 1) for(초기값;조건;증가값?)
 * 2) while
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("------------------");
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("------------------");
for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}
// *을 이용해서 6x6의 정사각형을 출력해라
for (let i = 0; i < 7; i++) {
  console.log("******");
}
console.log("------------------");

let square = "";
let side = 6;
for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}
console.log(square);
console.log("------------------");

/**
 * for...in
 */
const yuJin = {
  name: "안유진",
  year: 2003,
  group: "아이브",
};
for (let key in yuJin) {
  console.log(key);
}
const iveMembersArray = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
for (let key in iveMembersArray) {
  console.log(key);
  console.log(`${key}:${iveMembersArray[key]}`);
}
console.log("------------------");

/**
 * for...of
 */
for (let value of iveMembersArray) {
  console.log(value);
}

/**
 * while
 */
let number = 0;
while (number < 10) {
  number++;
}
console.log(number);
/**
 * do...while
 */
number = 0;
do {
  number++;
} while (number < 10);
console.log(number);
console.log("------------------");

/**
 * break
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log("------------------");

number = 0;
while (number < 10) {
  if (number === 5) {
    break;
  }
  number++;
  console.log(number);
}
console.log("------------------");

/**
 * continue
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
console.log("------------------");

number = 0;
while (number < 10) {
  number++;
  if (number === 5) {
    continue;
  }
  console.log(number);
}
