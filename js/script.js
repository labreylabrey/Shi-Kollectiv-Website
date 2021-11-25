const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const title = document.querySelector("h1.title");
const button = document.querySelector(".btSend");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  title.classList.toggle("active");
  links.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

button.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});

$('input').keyup(function () {
  if ($.trim(this.value).length > 0) $('#mc-embedded-subscribe').show();
  else $('#mc-embedded-subscribe').hide();
});


/* CONFETTI */
for (var i = 0; i < 50; i++) {
  create(i);
}

function create(i) {
  var width = Math.random() * 8;
  var height = width * 0.4;
  var colourIdx = Math.ceil(Math.random() * 3);
  var colour = "red";
  switch(colourIdx) {
    case 1:
      colour = "yellow";
      break;
    case 2:
      colour = "blue";
      break;
    default:
      colour = "red";
  }
  $('<div class="confetti-'+i+' '+colour+'"></div>').css({
    "width" : width+"px",
    "height" : height+"px",
    "top" : -Math.random()*20+"%",
    "left" : Math.random()*100+"%",
    "opacity" : Math.random()+0.5,
    "transform" : "rotate("+Math.random()*360+"deg)"
  }).appendTo('.wrapper');  
  
  drop(i);
}

function drop(x) {
  $('.confetti-'+x).animate({
    top: "100%",
    left: "+="+Math.random()*15+"%"
  }, Math.random()*2000 + 2000, function() {
    reset(x);
  });
}

function reset(x) {
  $('.confetti-'+x).animate({
    "top" : -Math.random()*20+"%",
    "left" : "-="+Math.random()*15+"%"
  }, 0, function() {
    drop(x);             
  });
}


