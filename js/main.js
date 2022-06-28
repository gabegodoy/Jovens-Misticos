const homePage = document.querySelector('.home__container');
const loadPage = document.querySelector('.loading__container');
const quotePage = document.querySelector('.quote__container')


function load(){
  homePage.style.display = 'none'
  loadPage.style.display = 'flex'
  setTimeout(loadQuote, 4000)
}

function loadQuote(){
  loadPage.style.display = 'none'
  quotePage.style.display = 'flex'
}


