const homePage = document.querySelector('.home__container');
const loadPage = document.querySelector('.loading__container');
const quotePage = document.querySelector('.quote__container');
const quoteText = document.querySelector('.quote__text__sentence');
const quoteAuthor = document.querySelector('.quote__text__author');
const soundButton = document.querySelector('.sound__button');
const backgroundSound = document.querySelector('.background__sound');
const magicSound = document.querySelector('.magic__sound');

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


/* LOAD SYSTEM */

function load(){
  getApi ();

  homePage.style.display = 'none'
  loadPage.style.display = 'flex'
  quotePage.style.display = 'none'

  setTimeout(loadQuote, 4000)
}

function loadQuote(){
  loadPage.style.display = 'none'
  quotePage.style.display = 'flex'
  magicSound.play()

  quoteText.innerHTML = ''
  quoteAuthor.innerHTML = ''
  quoteText.appendChild(document.createTextNode(quote))
  quoteAuthor.appendChild(document.createTextNode(author))
}


/* SOUND BUTTON ON/OFF */
soundButton.addEventListener('click', () => {
  soundButton.classList.toggle('sound__button--off')

  
  if (backgroundSound.muted === false){
    backgroundSound.muted = true;
    magicSound.muted = true;
  }
  
  else if (backgroundSound.muted === true){
    backgroundSound.muted = false;
    magicSound.muted = false;
  } 
  
})

function playBackgroundMusic (){
  backgroundSound.play()
  backgroundSound.volume = 0.2
}

setInterval(playBackgroundMusic, 50);
