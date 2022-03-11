
// 현재 img 폴더에 배경화면으로 사용할 이미지를 저장한 상태. 
// 배열의 원소로 배경화면으로 사용할 이미지파일의 이름갖는다.  
const images = [
  "00.jpg",
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
];

// 랜덤으로 images배열의 원소를 변수에 저장한다. ================================
const chosenImage = images[Math.floor(Math.random() *  images.length)]

// 자바스크립트로 이미지를 html에 추가하기============================
// 자바스크립트에서 html태그를 생성하여 body 내부에 추가한다.

// 태그 생성
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// body 내부에 추가
document.body.appendChild(bgImage)