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
