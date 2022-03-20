const title = document.getElementById("title"); // div.hello:first-child h1 -> querySelector로 css스타일로 뭐든 불러오는게 가능.

console.log(title.id);
console.log(title.className);


title.style.color  ="blue"; //자바 스크립트로 스타일까지 바꿀 수 있다!

function handleTitleClick(){
  title.style.color = "green";
}

function handleMouseEnter(){
  title.innerText = "mouse is here";
  }

function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

title.addEventListener("click", handleTitleClick); //괄호x 클릭하면 실행해야함.
title.addEventListener("mouseenter",handleMouseEnter); //마우스 올리면 클릭처리
title.addEventListener("mouseleave", handleMouseLeave); //마우스를 떼면 실행.

title.onclick = handleTitleClick; // addEventLister은 remove로 지워줄 수 있음.
console.dir(title); //어떤 property가 있는지 기능 탐색 가능.



window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);