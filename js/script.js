// LOADING SCREEN
window.addEventListener("load", function(){
  setTimeout(function(){ document.getElementById("loader").style.display="none"; },2000);
});

// ANIMATED COUNTERS
const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
  counter.innerText='0';
  const update=()=>{
    const target=+counter.getAttribute("data-target");
    const c=+counter.innerText;
    const increment=target/100;
    if(c<target){
      counter.innerText=`${Math.ceil(c+increment)}`;
      setTimeout(update,20);
    }else{
      counter.innerText=target;
    }
  };
  update();
});

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", ()=>{
  navLinks.style.right = navLinks.style.right === "0px" ? "-100%" : "0px";
});
