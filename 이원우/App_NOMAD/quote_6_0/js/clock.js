const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //padStart는 String에 사용가능하고, 문자열이 2글자가 아니면 0으로 채워준다.
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// interval => 몇 초당 한 번 재생할 것인지

getClock();
setInterval(getClock, 1000);
// setTimeout(sayHello, 5000);