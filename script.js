let slidePosition = 0;

// -----------------------  
//for mobile
// -----------------------  

let contentSlides = document.getElementsByClassName('carouselItems');
let totalSlides = contentSlides.length;

let btnNext = document.querySelector("#btnNext");
let btnPrev = document.querySelector("#btnPrev");

btnNext.addEventListener("click", function(){
  moveToNextSlide();
});

btnPrev.addEventListener("click", function(){
  moveToPrevSlide();
});

function updateSlidePosition(){
  for(let slide of contentSlides){
    slide.classList.remove('carouselItems_visible');
    slide.classList.add('carouselItems_hidden');
  }
  contentSlides[slidePosition].classList.add('carouselItems_visible');
}

function moveToNextSlide(){
  //alert('Next');
  if(slidePosition == totalSlides -1)
  {
    slidePosition = 0;
  }
  else
  {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide(){
  //alert('Prev');
  if(slidePosition == 0)
  {
    slidePosition = totalSlides -1;
  }
  else
  {
    slidePosition--;
  }
  updateSlidePosition();
}

// -----------------------  
// for tablet and desktop
// -----------------------  
let portfolioWrapSlides = document.getElementsByClassName('portfolioWrap');
let totalWrapSlides = portfolioWrapSlides.length;

let btnNextSlide = document.querySelector("#btnNextSlide");
let btnPrevSlide = document.querySelector("#btnPrevSlide");

btnNextSlide.addEventListener("click", function(){
  moveToNextSlideForWideScreen();
});

btnPrevSlide.addEventListener("click", function(){
  moveToPrevSlideForWideScreen();
});

function updateSlidePositionForWideScreen(){
  for(let slide of portfolioWrapSlides){
    slide.classList.remove('portfolioWrap_visible');
    slide.classList.add('portfolioWrap_hidden');
  }
  portfolioWrapSlides[slidePosition].classList.add('portfolioWrap_visible');
}

function moveToNextSlideForWideScreen(){
  if(slidePosition == totalWrapSlides -1)
  {
    slidePosition = 0;
  }
  else
  {
    slidePosition++;
  }
  updateSlidePositionForWideScreen();
}

function moveToPrevSlideForWideScreen(){
  if(slidePosition == 0)
  {
    slidePosition = totalWrapSlides -1;
  }
  else
  {
    slidePosition--;
  }
  updateSlidePositionForWideScreen();
}