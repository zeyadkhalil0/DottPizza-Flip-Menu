document.addEventListener("DOMContentLoaded", () => {
  let app = document.getElementById("app");
  if (app) {
    app.innerHTML = `
      <!-- Navbar -->
      <nav id="nav" class="flex justify-between items-center  px-4 py-4  md:px-8 fixed top-0 left-0 w-full  text-white">
      <div></div>
      <img src="./src/assets/logo.webp" alt="logo" class="w-28 h-24  absolute md:-top-4 top-1 left-0 ">
      <ul class="hidden md:flex gap-8  font-medium">
        <li><a href="/index.html" class="hover:text-red-600">Home</a></li>
          <li><a href="./src/pages/menu.html" class="hover:text-red-600">Menu</a></li>
          <li><a href="#about" class="hover:text-red-600">About</a></li>
          <li><a href="#contact" class="hover:text-red-600">Contact</a></li>
        </ul>
        <div>
        <i class="fa-solid fa-pizza-slice hidden md:block text-2xl text-white cursor-pointer"></i>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="hero flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-28 h-screen ">
        <div class="max-w-lg">
          <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight">
            Authentic <span class="text-red-600">Italian Pizza</span>
          </h1>
          <p class="mt-4 text-lg text-white">
            Taste the tradition of Italy with our handcrafted pizzas, made with fresh ingredients and baked to perfection.
          </p>
          <div class="mt-6 flex gap-4">
            <button id="menuBtn" class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              View Menu
            </button>
             <a  class="border border-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
           href="https://api.whatsapp.com/send/?phone=201148819479&text&type=phone_number&app_absent=0" target="_blank" >Order Now</a>
            </div>
        </div>
        </section>
    `;
  }
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
    navbar.classList.toggle("top-0");
    HamburgerMenu.classList.toggle("text-black")
  });

  // icons
  let icons = document.querySelectorAll(".icons a i");
  icons.forEach((icon) =>{
  icon.classList.add("m-auto", "px-4", "py-2","rounded-md", "w-8", "h-8","flex","flex-row","justify-center","items-center")
  })
});
