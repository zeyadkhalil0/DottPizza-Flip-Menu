document.addEventListener("DOMContentLoaded", () => {
  let app = document.getElementById("app");
  if (app) {
    app.innerHTML = `
      <!-- Navbar -->
      <nav id="nav" class="flex justify-between items-center  px-4 py-4  md:px-8 fixed top-0 left-0 w-full z-50 text-white">
      <div></div>
      <img src="../assets/logo.Webp" alt="logo" class="w-32 h-28  absolute top-1 left-0 ">
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

    `;
  }
  let menuBtn = document.getElementById("menuBtn");
    menuBtn?.addEventListener("click", () => {
      window.location.href = './src/pages/menu.html'
    });

    
});

    