/**
 * Array Functions
 */
let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembers);
console.log("----------------");
// 원래 array 변경안하는 방법

// concat(): 새로운 array 만들어서 반환
console.log(iveMembers.concat("코드팩토리"));
console.log(iveMembers);
console.log("----------------");

// slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator
let iveMembers2 = [...iveMembers];
console.log(iveMembers2);
let iveMembers3 = [iveMembers];
console.log(iveMembers3);
console.log("----------------");

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);
// console.log([...iveMembers] === iveMembers);

// join()
console.log(typeof iveMembers.join());
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);
console.log(iveMembers.reverse());

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);
// a,b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 수를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 수를 반환
// 3) 원래 순서를 그래도 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);
numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);
console.log("----------------");

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));
console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  })
);
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));
console.log(numbers.filter((x) => x % 2 === 0));

// find() 해당 되는 값의 첫번째 값만 반환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));
/**
 * numbers = [1, 8, 7, 6, 3];
 * numbers.reduce((p, n) => p + n, 0)
 * 1. 초기값 0이 입력
 * 2. numbers 어레이 첫번째 값인 1이 n에 입력
 * 3. p+n=0+1=1이 반환됨
 * 4. 반환된 1이 p에 입력됨
 * 5. 어레이 두번째 값인 8이 n에 입력됨
 * 6. p+n=1+8=9가 반환
 * 7. 6에서 반환한 값 9가 p에 입력됨
 * 8. numbers리스트의 모든 값들을 다 순회할 때까지 반복
 * 
 * [순서]
 * p+n = 0+1= 1
 * 1+8 = 9
 * 9+7 = 16
 * 16+6 = 22
 * 22+3 = 25
 */