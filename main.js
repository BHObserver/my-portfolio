const navBtn = document.querySelector('.nav-btn');
const header = document.querySelector('.header-desktop');
const menuContainer = document.querySelector('.mobile-menu-container');
const cross = document.querySelector('.cross');
const navMobile = document.querySelector('.nav-mobile');
const navItems = document.querySelectorAll('.header-desktop li');

navBtn.addEventListener('click', () => {
  header.classList.add('mobile-menu');
  menuContainer.style.display = 'block';
  cross.style.display = 'block';
  navMobile.style.display = 'block';
});

cross.addEventListener('click', () => {
  header.classList.remove('mobile-menu');
  menuContainer.style.display = 'none';
  cross.style.display = 'none';
  navMobile.style.display = 'none';
});

navItems.forEach((element) => {
  element.addEventListener('click', () => {
    header.classList.remove('mobile-menu');
    menuContainer.style.display = 'none';
    cross.style.display = 'none';
    navMobile.style.display = 'none';
  });
});