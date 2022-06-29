const homePage = document.querySelector('.home__container');
const loadPage = document.querySelector('.loading__container');
const quotePage = document.querySelector('.quote__container')
const quoteText = document.querySelector('.quote__text__sentence')
const quoteAuthor = document.querySelector('.quote__text__author')

function getRandomArbitrary(min, max) {
 return Math.random() * (max - min) + min;
}
let randomNum = parseInt(getRandomArbitrary(1, 306))

function load(){
  homePage.style.display = 'none'
  loadPage.style.display = 'flex'
  setTimeout(loadQuote, 4000)
}

function loadQuote(){
  loadPage.style.display = 'none'
  quotePage.style.display = 'flex'

  quoteText.appendChild(document.createTextNode(frases[randomNum].estrofe))
  quoteAuthor.appendChild(document.createTextNode(frases[randomNum].poeta))
}



/*  */

/*

console.log(randomNum)
console.log(frases[randomNum].estrofe)
console.log(frases[randomNum].poeta) */