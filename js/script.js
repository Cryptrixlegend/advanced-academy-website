// ===== MOBILE MENU =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger && navLinks){
  hamburger.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
  });
}

// ===== LOADER SYSTEM =====
window.addEventListener("load",()=>{
  const loader = document.getElementById("loader");
  if(loader){
    setTimeout(()=>{
      loader.style.opacity="0";
      setTimeout(()=>loader.style.display="none",500);
    },1200);
  }
});

// ===== SCROLL REVEAL ANIMATION =====
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
    }
  });
},{
  threshold:0.1
});

cards.forEach(card=>{
  card.style.opacity="0";
  card.style.transform="translateY(30px)";
  card.style.transition="0.6s ease";
  observer.observe(card);
});

// ===== BUTTON CLICK EFFECT =====
document.addEventListener("click",(e)=>{
  if(e.target.classList.contains("btn")){
    e.target.style.transform="scale(0.95)";
    setTimeout(()=>e.target.style.transform="scale(1)",150);
  }
});
