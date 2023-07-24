/* eslint-disable linebreak-style */
const navBtn = document.querySelector('.nav-btn');
const header = document.querySelector('.header-desktop');
const cross = document.querySelector('.cross');
const navMobile = document.querySelector('.nav-mobile');
const navItems = document.querySelectorAll('.header-desktop li');

navBtn.addEventListener('click', () => {
  header.classList.add('mobile-menu');
  cross.style.display = 'block';
  navMobile.style.display = 'block';
});

