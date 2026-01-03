// Preloader
window.addEventListener("load",()=> {
  document.getElementById("preloader").style.display="none";
});

// Theme toggle
const toggle=document.getElementById("theme-toggle");
toggle.onclick=()=>document.body.classList.toggle("light");

// Typing effect
const text="Biomedical Student | Frontend Developer | Java Developer";
let i=0;
(function type(){
  if(i<text.length){
    document.getElementById("typing").textContent+=text[i++];
    setTimeout(type,70);
  }
})();

// Mobile menu
document.getElementById("menu-toggle").onclick=()=>{
  document.getElementById("navLinks").classList.toggle("show");
};

// Scroll animation
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>e.isIntersecting&&e.target.classList.add("show"));
});
document.querySelectorAll(".section,.skill-card,.project-card").forEach(el=>{
  el.classList.add("fade-up");
  observer.observe(el);
});

// Project filter
document.querySelectorAll(".project-filters button").forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll(".project-card").forEach(card=>{
      card.style.display=
        btn.dataset.filter==="all"||card.dataset.category===btn.dataset.filter
        ?"block":"none";
    });
  };
});

// Contact validation
document.getElementById("contactForm").onsubmit=e=>{
  e.preventDefault();
  const msg=document.getElementById("formMsg");
  msg.textContent="Message validated (no backend)";
};
