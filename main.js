/* eslint-disable linebreak-style */

/* Add mobile menue */
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

cross.addEventListener('click', () => {
  header.classList.remove('mobile-menu');
  cross.style.display = 'none';
  navMobile.style.display = 'none';
});

navItems.forEach((element) => {
  element.addEventListener('click', () => {
    header.classList.remove('mobile-menu');
    cross.style.display = 'none';
    navMobile.style.display = 'none';
  });
});

/* Add pop up */
const seeProjectBtn = document.querySelectorAll('.see-project-btn');
const popUp = document.querySelector('.blur-bg');
const cancelMobile = document.querySelector('.close-pop-up-mobile');
const cancelDesktop = document.querySelector('.close-pop-up');
const project = [
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
  },
];
seeProjectBtn.forEach((e) => {
  e.addEventListener('click', () => {
    popUp.classList.toggle('hide');
  });
});

cancelDesktop.addEventListener('click', () => {
  popUp.classList.add('hide');
});

cancelMobile.addEventListener('click', () => {
  popUp.classList.add('hide');
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    popUp.classList.add('hide');
  }
});