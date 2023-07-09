/* eslint-disable linebreak-style */
const navBtn = document.querySelector('.nav-btn');
const header = document.querySelector('.header-desktop');
const cross = document.querySelector('.cross');

navBtn.addEventListener('click', () => {
  header.classList.add('mobile-menu');
  header.innerHTML = '<div class="cross"></div>';
});

cross.addEventListener('click', () => {
  header.classList.remove('mobile-menu');
});