/**
 * Data Types
 *
 * 여섯 개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 *
 * 1) Number(숫자)
 * 2) String(문자열)
 * 3) Boolean(불리언)
 * 4) Undefined(언디파인드)
 * 5) null(널)
 * 6) Symbol(심볼)
 * 7) Object(객체)
 *  function, array, object
 */

/**
 * number type
 */
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log("===================");

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("===================");

/**
 * string type
 */
const codeFactory = '"코"드팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);
console.log("===================");

/**
 * template literal
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */
const iveYuJin = "아이브\n안유진";
console.log(iveYuJin);
const iveWonYoung = "아이브\t장원영";
console.log(iveWonYoung);
const backSlash = "아이브\\코드팩토리";
console.log(backSlash);
const smallQuotation = "아이브'코드팩토리";
console.log(smallQuotation);

const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = "아이브";
console.log(groupName + "안유진");
console.log(`${groupName} 안유진`);
console.log("===================");

/**
 * boolean type
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log("===================");

/**
 * undefined
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * 직접 undefined로 값을 초기화하는건 지양해야함
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log("===================");

/**
 * null type
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * js에서는 개발자가 명시적으로 없는 값으로 초기화할 때사용된다.
 */
let init = null;
console.log(init);
console.log(typeof init); //object(버그)
console.log("===================");

/**
 * symbol type
 * 유일무이한 값을 생성할 때 사용한다
 * 다른 프리미티브 값들과 다르게 symbol 함수를 호출해서 사용한다.
 */
const test1 = "1";
const test2 = "1";
console.log(test1 === test2);
const symbol1 = Symbol("1");
const symbol2 = Symbol("2");
console.log(symbol1 === symbol2);
console.log("===================");
/**
 * object type
 * map
 * key:value의 쌍으로 이루어져있다.
 */
const dictionary = {
  red: "빨강",
  orange: "주황",
  yellow: "노랑",
};
console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);
console.log(dictionary["yellow"]);
console.log(typeof dictionary);
console.log("===================");
/**
 * array type
 * 값을 리스트로 나열할 수 있는 타입
 */
const iveMembersArray = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembersArray);
console.log("===================");
/**
 * index
 * 0부터 시작, 1씩증가
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);
iveMembersArray[0] = "코드팩토리";
console.log(iveMembersArray);
console.log(typeof iveMembersArray);
console.log("===================");
/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시(c)
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론(js)
 */