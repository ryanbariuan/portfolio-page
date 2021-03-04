let slidePosition = 0;

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