document.addEventListener("DOMContentLoaded", () => {
  let app = document.getElementById("app");
  if (app) {
    app.innerHTML = `
            <!-- Navbar -->
      <nav class="flex justify-between items-center px-8 py-4   fixed top-0 left-0 w-full z-50">
      <div></div>
      <img src="../assets/logo.png" alt="logo" class="w-32 h-28  absolute ">
      <ul class="hidden md:flex gap-8  font-medium">
        <li><a href="/index.html" class="hover:text-red-600">Home</a></li>
          <li><a href="./src/pages/menu.html" class="hover:text-red-600">Menu</a></li>
          <li><a href="#about" class="hover:text-red-600">About</a></li>
          <li><a href="#contact" class="hover:text-red-600">Contact</a></li>
        </ul>
        <button id="clickMe" class="text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Order Now
        </button>
      </nav>

    `;
  }
  let menuBtn = document.getElementById("menuBtn");
    menuBtn?.addEventListener("click", () => {
      window.location.href = './src/pages/menu.html'
    });
});

    