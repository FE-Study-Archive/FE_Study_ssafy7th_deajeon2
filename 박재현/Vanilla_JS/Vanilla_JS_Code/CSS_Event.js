const h1 = document.querySelector("#title h1");

function handleTitleClick(){
  const currentColor = h1.style.color;
  let newColor;
  if(h1.style.color === "blue"){
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
  
}

h1.addEventListener("click", handleTitleClick);