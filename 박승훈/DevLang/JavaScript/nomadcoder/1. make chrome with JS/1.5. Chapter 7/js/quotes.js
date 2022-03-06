const quotes = [
  {
    quote: "비범한 삶이 아니거든 안주하지 말라.",
    author: "랠프 왈도 에머슨",
  },
  {
    quote: "성공의 크기는 열망의 깊이에 좌우된다.",
    author: "피터데이비스",
  },
  {
    quote: "결코 끌 수 없는 열정으로 삶을 살아라.",
    author: "셰익스피어",
  },
  {
    quote: "나약한 태도는 성격도 나약하게 만든다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "이 세상에 열정 없이 이루어진 위대한 것은 없다.",
    author: "게오르크 빌헬름",
  },
  {
    quote: "가장 열광적인 꿈을 꿔라. 그러면 열광적인 삶을 살게 될 것이다.",
    author: "나폴레온 힐",
  },
  {
    quote: "너는 왜 평범하게 노력하는가? 시시하게 살기를 원치 않으면서!",
    author: "존 F.케네디",
  },
  {
    quote: "미래는 현재 우리가 무엇을 하는가에 달려있다.",
    author: "마하트마 간디",
  },
  {
    quote: "산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다.",
    author: "공자",
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;