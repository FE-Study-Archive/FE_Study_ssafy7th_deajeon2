const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//   console.log(h1.style.color);
//   h1.style.color = "blue";
//   console.log(h1.style.color);
// }

// function handleTitleClick(){
//   const clickedClass = "clicked";
//   if(h1.classList.contains(clickedClass)){
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// } 

function handleTitleClick(){
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);