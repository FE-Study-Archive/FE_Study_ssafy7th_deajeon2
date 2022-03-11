const clock = document.querySelector("h2#clock");

// function sayHello() {
//   console.log("Hello");
// }


// setInterval(sayHello, 5000);
// 몇 ms 마다 함수를 실행 할지

// setTimeout(sayHello, 5000);
// 몇 ms 후에 함수를 실행 할지

// string.padStart(2, "0")
// string의 길이를 2로 하고 2가 아닐시 앞에 "0"추가
// padEnd(2, "0")
//  이건 뒤에 추가

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000);