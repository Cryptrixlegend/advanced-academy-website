// LOADING SCREEN

window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},1500);

});

// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = '0';

const update = () => {

const target = +counter.getAttribute("data-target");

const c = +counter.innerText;

const increment = target / 200;

if(c < target){

counter.innerText = `${Math.ceil(c + increment)}`;

setTimeout(update,20);

}
else{

counter.innerText = target;

}

};

update();

});

// MOBILE MENU

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

// HERO IMAGE WIPE ANIMATION

gsap.to(".reveal-image img", {
clipPath: "inset(0 0% 0 0)",
scale: 1,
duration: 1.5
});
