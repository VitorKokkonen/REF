const icon = document.getElementById('icon');
const sidebar = document.querySelector('.sidebar');

icon.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});