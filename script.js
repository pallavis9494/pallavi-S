const toggleBtn = document.getElementById('darkToggle');
const html = document.documentElement;
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Dark mode toggle
toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
  toggleBtn.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});