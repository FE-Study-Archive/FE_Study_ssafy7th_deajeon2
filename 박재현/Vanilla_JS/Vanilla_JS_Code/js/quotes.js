const quotes = [{
  quote : "치킨은 늘 옳다.", author : "박재경"
},
{
  quote : "어제보다 강한 오늘 오늘보다 강한 내일.", author : "박재현"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;