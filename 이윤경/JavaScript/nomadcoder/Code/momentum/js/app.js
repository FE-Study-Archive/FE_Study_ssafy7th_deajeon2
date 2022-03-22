const title = document.querySelector("#title");

function handleTitleClick(){
  title.style.color = "blue";
}
// style은 css에서 바꿔주는게 정석!! 이제 css를 js에서 어떻게 사용하는지 배워보기.
function handleMouseEnter() {
  title.innerText = "Mouse is here!"
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone!"
}

function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
  alert("copier");
}
  

title.addEventListener("mouseenter", handleMouseEnter);
// title.onclick = handleMouseEnter; 위랑 같은 코드!
// but, addEventListener는 removeEventListener을 통해서 제거할 수있다
title.addEventListener("mouseleave", handleMouseLeave);
title.addEventListener("click",handleTitleClick);

  window.addEventListener("resize", handleWindowResize);
  window.addEventListener("copy", handleWindowCopy);