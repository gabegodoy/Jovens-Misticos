const homePage = document.querySelector('.home__container');
const loadPage = document.querySelector('.loading__container');
const quotePage = document.querySelector('.quote__container')
const quoteText = document.querySelector('.quote__text__sentence')
const quoteAuthor = document.querySelector('.quote__text__author')

function getRandomArbitrary(min, max) {
 return Math.random() * (max - min) + min;
}
let randomNum;

function load(){
  homePage.style.display = 'none'
  loadPage.style.display = 'flex'
  quotePage.style.display = 'none'

  setTimeout(loadQuote, 4000)
}

function loadQuote(){
  randomNum = parseInt(getRandomArbitrary(1, 306))

  loadPage.style.display = 'none'
  quotePage.style.display = 'flex'


  quoteText.innerHTML = ''
  quoteAuthor.innerHTML = ''
  quoteText.appendChild(document.createTextNode(frases[randomNum].estrofe))
  quoteAuthor.appendChild(document.createTextNode(frases[randomNum].poeta))
}

function newQuote(){

  
}


