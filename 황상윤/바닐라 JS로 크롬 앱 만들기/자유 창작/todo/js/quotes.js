const quotes = [
  {
  quote: '아쉬움이 있기에 더 발전할 수 있는거야',
  author: '-이윤경-'
  },
  {
  quote: '꿈은 도망가지 않아 도망가는 건 언제나 자기 자신이지',
  author: '-신형만-'
  },
  {
  quote: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.',
  author: '-사무엘 존슨-'
  },
  {
  quote: '피할수 없으면 즐겨라.',
  author: '-로버트 엘리엇-.'
  },
  {
  quote: '절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.',
  author: '-L.론허바드-'
  },
  {
  quote: '한번의 실패와 영원한 실패를 혼동하지 마라.',
  author: '-F.스콧 핏제랄드-'
  },
  {
  quote: '계단을 밟아야 계단 위에 올라설수 있다.',
  author: '-터키속담-'
  },
  {
  quote: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.',
  author: '-아드레 말로-'
  },
  {
  quote: '성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.',
  author: '-톰 모나건-'
  },
  {
  quote: '꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.',
  author: '-괴테-'
  },
  ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;