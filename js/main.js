const homePage = document.querySelector('.home__container');
const loadPage = document.querySelector('.loading__container');
const quotePage = document.querySelector('.quote__container')
const quoteText = document.querySelector('.quote__text__sentence')
const quoteAuthor = document.querySelector('.quote__text__author')
let author;
let quote;

/* API GET */

function getApi (){
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'defaut'
  }

  fetch('https://api.quotable.io/random')

  .then((reponse) => {reponse.json()
    .then(data => {
      author = data.author;
      quote = data.content;   
    
    }) })
    .catch(e => console.log('Error' + e))

    
}


/* 
function getRandomArbitrary(min, max) {
 return Math.random() * (max - min) + min;
}
let randomNum;
 */

function load(){
  getApi ();

  homePage.style.display = 'none'
  loadPage.style.display = 'flex'
  quotePage.style.display = 'none'

  setTimeout(loadQuote, 4000)
}

function loadQuote(){
  /* randomNum = parseInt(getRandomArbitrary(1, 306)) */

  loadPage.style.display = 'none'
  quotePage.style.display = 'flex'


  quoteText.innerHTML = ''
  quoteAuthor.innerHTML = ''
  quoteText.appendChild(document.createTextNode(quote))
  quoteAuthor.appendChild(document.createTextNode(author))
}

function newQuote(){

  
}


