// LOADING SCREEN
window.addEventListener("load", function(){
  const loader = document.getElementById("loader");
  if(loader){
    setTimeout(function(){
      loader.style.display="none";
    },1500);
  }
});

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

if(counters.length > 0){
  counters.forEach(counter => {
    counter.innerText = '0';

    const update = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;
      const increment = target / 200;

      if(c < target){
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(update,20);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
}

// MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger && navLinks){
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
