const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
  // const clickedClass = "clicked";
  // if (h1.classList.contains(clickedClass)) { // html에 클래스 이름이 선언되지 않았는데 클릭 시에 style.css의 active 클래스가 적용됨.
  //   h1.classList.remove(clickedClass) = "";
  // } else {
  //   h1.classList.add(clickedClass); // classList를 사용해 class중에 해당하는 클래스가 있고 없고를 판단해 지우거나 추가한다.
  //   //기존에 선언된 클래스를 대체할 필요가 없음.
  // }
  h1.classList.toggle("clicked"); // 한방에 위의 함수를 끝냄.
}

h1.addEventListener("click", handleTitleClick);


//* className은 모두 class를 교체해버려서 사용성이 많이 떨어짐.