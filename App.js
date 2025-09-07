document.addEventListener("DOMContentLoaded", () => {
  let app = document.getElementById("app");
  if (app) {
    app.innerHTML = `
      <!-- Navbar -->
      <nav class="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div class="text-2xl font-bold text-red-600">DottPizza</div>
        <ul class="hidden md:flex gap-8 text-gray-700 font-medium">
        <li><a href="/index.html" class="hover:text-red-600">Home</a></li>
          <li><a href="./src/pages/menu.html" class="hover:text-red-600">Menu</a></li>
          <li><a href="#about" class="hover:text-red-600">About</a></li>
          <li><a href="#contact" class="hover:text-red-600">Contact</a></li>
        </ul>
        <button id="clickMe" class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Order Now
        </button>
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
            <button class="border border-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Book a Table
            </button>
            </div>
        </div>
      </section>
    `;
  }
  let menuBtn = document.getElementById("menuBtn");
    menuBtn?.addEventListener("click", () => {
      window.location.href = './src/pages/menu.html'
    });
});

