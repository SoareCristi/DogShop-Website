//Slideshow
//Rulare automata
var slideIndex = 0;
Slides();

function Slides() {
    var slides = document.getElementsByClassName("slide");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length)
        slideIndex = 1;
    console.log(slideIndex);
    slides[slideIndex-1].style.display = "block";
    setTimeout(Slides, 7000);
}

//Rulare manuala generata de mouse-click
function nextSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length)
    slideIndex = 1;
  if (n < 1)
    slideIndex = slides.length;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
//Slideshow end


//Like button
var like_btn = document.getElementsByClassName('like');
console.log(like_btn);

function like_randomiser(x){
    var min = 0, max = 255;
    var r, g, b;
    r = Math.floor(Math.random() * (max - min + 1)) + min;
    g = Math.floor(Math.random() * (max - min + 1)) + min;
    b = Math.floor(Math.random() * (max - min + 1)) + min;
    var string = "rgb(" + r + ", " + g + ", " + b + ")";
    like_btn[x].style.color = string;
}

function toggle(x){
    if (like_btn[x].innerText == "favorite_border"){
        like_btn[x].innerText = "favorite"; 
        like_randomiser(x);
    }
    else{
        like_btn[x].innerText = "favorite_border";
        like_btn[x].style.color = null;
    }
}
//Like button end