const title = document.querySelector(".hello h1");

function handleTitleClick(){
  if (title.style.color=="brown") {
    title.style.color = "blue";
  } else if (title.style.color=="blue") {
    title.style.color = "red";
  } else {
    title.style.color = "brown";
  }
}

function handlerTitleMouseOver(){
  title.style.opacity = 0.5;
}

function handlerTitleMouseOut(){
  title.style.opacity = 1;
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseover", handlerTitleMouseOver);
title.addEventListener("mouseout", handlerTitleMouseOut);