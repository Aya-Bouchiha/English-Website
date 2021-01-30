// Hambergur and The Nav Items Variables
const hambergur = document.getElementById('hambergur');
const navList = document.querySelector('.ul-nav');
hambergur.addEventListener('click',()=>{ 
    hambergur.classList.toggle('active') 
    navList.classList.toggle('active')
});
//  Animation ,
new TypeIt("#hero-text h1", {
    strings: "Start Investing In You",
    speed: 100,
    loop : true ,
    waitUntilVisible: true
  }).go();
ScrollOut({
  targets : '#about-img , #par-about , .first-contact , .uli-con , #features-section article ',
})
const links = document.querySelectorAll(".nav-link");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

// Scroll Animation
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("data-link");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}