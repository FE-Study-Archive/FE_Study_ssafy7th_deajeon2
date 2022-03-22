const quotes = [
  {
    quote:"LIFE IS EGG",
    author:"Unknown"
  },
  {
    quote:"무식은 내 삶이다",
    author:"Unknown"
  },
  {
    quote:"삶은 자기 자신을 찾는 여정이 아니라 자기 자신을 만드는 과정이다!",
    author:"Unknown"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;