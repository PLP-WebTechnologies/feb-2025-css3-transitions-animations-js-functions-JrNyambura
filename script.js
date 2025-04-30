// Load theme from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.className = savedTheme;
  document.getElementById('themeSelect').value = savedTheme;
});

// Update theme and save to localStorage
document.getElementById('themeSelect').addEventListener('change', (e) => {
  const theme = e.target.value;
  document.body.className = theme;
  localStorage.setItem('theme', theme);
});

// Animate the box on click
const box = document.getElementById('box');
box.addEventListener('click', () => {
  box.classList.add('animate');

  // Remove class after animation ends to allow re-trigger
  box.addEventListener('animationend', () => {
    box.classList.remove('animate');
  }, { once: true });
});
