let menuBtn = document.getElementById("menuBtn");
menuBtn?.addEventListener("click", () => {
  window.location.href = "./src/pages/menu.html";
});

let navbar = document.getElementById("Mobilenav");
let HamburgerMenu = document.getElementById("menu");
HamburgerMenu.addEventListener("click", () => {
  HamburgerMenu.classList.contains("fa-bars-staggered")
    ? HamburgerMenu.classList.replace("fa-bars-staggered", "fa-xmark")
    : HamburgerMenu.classList.replace("fa-xmark", "fa-bars-staggered");
    // Nav Mobile
  navbar.classList.contains("-top-80")?
    navbar.classList.replace("-top-80", "top-0"):
    navbar.classList.replace("top-0", "-top-80");
    
  HamburgerMenu.classList.toggle("text-black");
});

// icons
let icons = document.querySelectorAll(".icons a i");
icons.forEach((icon) => {
  icon.classList.add(
    "m-auto",
    "px-4",
    "py-2",
    "rounded-md",
    "w-8",
    "h-8",
    "flex",
    "flex-row",
    "justify-center",
    "items-center"
  );
});



// Animation Intro


// window.addEventListener("load", ()=>{
//   let person = document.getElementById("person");
//   let pizzaSlice = document.getElementById("pizza-slice");
//   let welcomeText = document.getElementById("Welcome-to-dozzpizza");
//   let intro = document.getElementById("intro");
//   let moto = document.getElementById("Motorcycle");
//   let process = document.getElementById("pizzaProcess");

// // Animation
// pizzaSlice.classList.add("fadeRight");
// setTimeout(() =>{
//   pizzaSlice.classList.replace("fadeRight","fade-out");
// },3000)
// // 
// setTimeout(() =>{
//   person.classList.add("fadeDown");
// },3000)
// // 

// setTimeout(() =>{
//   person.classList.replace("fadeDown","fade-out");
// moto.classList.add("fadeRight");
// },4500)

// setTimeout(()=>{
//   moto.classList.replace("fadeRight","fade-out-Left");
// },7000);

// setTimeout(() =>{
// welcomeText.classList.add("fadeUp")
// },8000)

// setTimeout(() =>{
//   welcomeText.classList.add("fade-out");
// },9000)



// setTimeout(() =>{
// intro.classList.add("fade-out");
//   setTimeout(() => {
//     intro.classList.add("hide");
//   }, 700);
// },10000)
// });


