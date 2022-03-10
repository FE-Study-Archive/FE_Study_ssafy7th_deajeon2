// 명언 Array
const quotes = [
  {
    quote: "오늘 먹을 치킨을 내일로 미루지 말자.",
    author: "치킨",
  },
  {
    quote: "박수 칠 때 떠놔라.",
    author: "회",
  },
  {
    quote: "오래 고아야 예쁘다 너도 그렇다.",
    author: "설렁탕",
  },
  {
    quote: "시작이 반반이다.",
    author: "아리스토텔레스",
  },
  {
    quote: "수육했어 오늘도.",
    author: "보쌈달빛",
  },
  { 
    quote: "꺼진 배도 다시보자.",
    author: "류승룡",
  },
  {
    quote: "쪘지만 잘 싸웠다.",
    author: "만두",
  },
  {
    quote: "눈에는 눈, 이에는.",
    author: "고춧가루",

  },
  {
    quote: "가장 낮은 곳에서 가장 고생했을 당신.",
    author: "누룽지",
  },
  {
    quote: "아빠 힘내세요 우리고 있잖아요.",
    author: "사골국물",
  },
  {
    quote: "치킨은 살 안쪄요.",
    author: "내가 쪄요",
  },
  {
    quote: "집이 고픈걸까 배가 고픈걸까.",
    author: "집밥",
  },
  { 
    quote: "등잔 밑이 혼자 먹기 좋다.",
    author: "금강산도 십분컷",
  },
  {
    quote: "사공이 많으면 배가 안부르다.",
    author: "1인 3닭",
  },
  {
    quote: "그래도 치킨은 온다.",
    author: "갈릴레오 갈릴레이",
  },
  {
    quote: "함께 였을 때, 우린 항상 빛났었다.",
    author: "세트 메뉴",
  },
  {
    quote: "살어리 살어리랏다 야식에 살오르리랏다.",
    author: "야들야들맛있셩 얄라리얄라",
  },
  { 
    quote: "원수는 닭다리 집다 만난다.",
    author: "통닭",
  },
  {
    quote: "두드려라 그럼 커질 것이다.",
    author: "왕 돈까스",
  },
  {
    quote: "자라보고 놀란 가슴 솥뚜껑 삼겹살로 달랜다.",
    author: "삼겹살",
  },
  { 
    quote: "끝날 때 까지 끝난 게 아니다.",
    author: "볶음밥 사리",
  },
  {
    quote: "내일은 더 나은 내가 되어야 한다.",
    author: "숙성 스테이크"
  },
  {
    quote: "당면 삼키고 쫄면 씹는다.",
    author: "즉석 떡볶이",
  },
  {
    quote: "소 익고 소금간 고친다.",
    author: "한우",
  },
  {
    quote: "미디움 받을 용기.",
    author: "스테이크",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


// Math 모듈을 이용하여 랜덤으로 인덱스를 뽑아 quotes Array의 해당 원소에 접근하기 
// Math.random(): 0에서 1사이의 랜덤한 숫자를 제공 
// Math.random() * [number]: 0에서 number 사이의 랜덤한 숫자를 제공 (모든 실수)
// Math.round(): 인자로 받은 숫자를 반올림한다. 
// Math.ceil(): 인자로 받은 숫자를 올림한다.
// Math.floor(): 인자로 받은 숫자를 내림한다.  

// 인덱스는 정수이기 때문에 floor()를 사용한다. 
const todaysQuote = quotes[Math.floor(Math.random() *  quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;