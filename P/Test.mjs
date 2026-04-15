// function introduce(name, age = 30, major = "Unknown") {
//     console.log(`이름: ${name}, 나이: ${age}, 전공: ${major}`);
//   }
  
// // 출력: 이름: Kim, 나이: 30, 전공: Unknown

// // 예상 출력:
// /* 
// --- 학생 정보 ---
// 이름: 이영희
// 나이: 21세
// 전공: 전자공학
// --- 학생 정보 ---
// 이름: 박지성
// 나이: 23세
// 전공: 컴공
// */
// printStudent({ name: "이영희", age: 21, major: "전자공학" });
// printStudent({ name: "박지성", age: 23 });

const students = [
    { name: "Kim", age: 21 },
    { name: "Lee", age: 18 },
    { name: "Park", age: 23 }
  ];
const newArr = [...students, 4, 5];
console.log(newArr);  // 출력: [1, 2, 3, 4, 5]
