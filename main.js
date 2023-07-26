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

// Refactor Project Section
const workSection = document.querySelector('.works');
const projectGrid = document.createElement('div');
projectGrid.classList.add('project-grid');
workSection.appendChild(projectGrid);

const projects = [
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repudiandae praesentium, earum consectetur, optio tempore, sed placeat perferendis veniam voluptas esse enim doloremque obcaecati eum possimus corporis minima facilis adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus velit quisquam fuga fugit iusto voluptatibus delectus quo quas fugiat rem cum maiores, aspernatur culpa praesentium sed, ab eos cupiditate.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/todo/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/todo',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repudiandae praesentium, earum consectetur, optio tempore, sed placeat perferendis veniam voluptas esse enim doloremque obcaecati eum possimus corporis minima facilis adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus velit quisquam fuga fugit iusto voluptatibus delectus quo quas fugiat rem cum maiores, aspernatur culpa praesentium sed, ab eos cupiditate.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/randomcard/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/randomcard',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repudiandae praesentium, earum consectetur, optio tempore, sed placeat perferendis veniam voluptas esse enim doloremque obcaecati eum possimus corporis minima facilis adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus velit quisquam fuga fugit iusto voluptatibus delectus quo quas fugiat rem cum maiores, aspernatur culpa praesentium sed, ab eos cupiditate.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/patatapcloneproject/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/patatapcloneproject',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repudiandae praesentium, earum consectetur, optio tempore, sed placeat perferendis veniam voluptas esse enim doloremque obcaecati eum possimus corporis minima facilis adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus velit quisquam fuga fugit iusto voluptatibus delectus quo quas fugiat rem cum maiores, aspernatur culpa praesentium sed, ab eos cupiditate.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/message/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/message',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repudiandae praesentium, earum consectetur, optio tempore, sed placeat perferendis veniam voluptas esse enim doloremque obcaecati eum possimus corporis minima facilis adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus velit quisquam fuga fugit iusto voluptatibus delectus quo quas fugiat rem cum maiores, aspernatur culpa praesentium sed, ab eos cupiditate.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/mazegame/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/mazegame',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repudiandae praesentium, earum consectetur, optio tempore, sed placeat perferendis veniam voluptas esse enim doloremque obcaecati eum possimus corporis minima facilis adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus velit quisquam fuga fugit iusto voluptatibus delectus quo quas fugiat rem cum maiores, aspernatur culpa praesentium sed, ab eos cupiditate.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/colorgame/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/colorgame',
  },
];

projects.forEach((project) => {
  // Container for the grid.
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');
  // Container for the image.
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  projectContainer.appendChild(imgContainer);
  // Container for the project details
  const projectDetails = document.createElement('div');
  projectDetails.classList.add('project-details');
  projectContainer.appendChild(projectDetails);
  // Project title
  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.innerHTML = project.name;
  projectDetails.appendChild(projectTitle);
  // Tech ul
  const techs = document.createElement('ul');
  techs.classList.add('tech-stack');
  projectDetails.appendChild(techs);
  // Tech li
  project.techs.forEach((item) => {
    const tech = document.createElement('li');
    tech.classList.add('tag');
    tech.innerHTML = item;
    techs.appendChild(tech);
  });
  // See project Button Container
  const seeProjectBtnContainer = document.createElement('div');
  seeProjectBtnContainer.classList.add('btn-container');
  projectDetails.appendChild(seeProjectBtnContainer);
  // See project Button
  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('see-project-btn');
  seeProjectButton.innerHTML = 'See project';
  seeProjectBtnContainer.appendChild(seeProjectButton);
  // Append container to work-section
  projectGrid.appendChild(projectContainer);
});

/* Add pop up */
const popUp = document.querySelector('.blur-bg');
const popUpHeading = document.querySelector('.pop-up-heading');
const popUpDescription = document.querySelector('.pop-up-description');
const seeProjectBtn = document.querySelectorAll('.see-project-btn');
const cancelMobile = document.querySelector('.close-pop-up-mobile');
const cancelDesktop = document.querySelector('.close-pop-up');
const liveBtn = document.querySelector('.see-live-btn');
const sourceBtn = document.querySelector('.see-source-btn');
const arr = Array.from(seeProjectBtn);
let targetCard;
let targetCardTitle;
let targetCardBtns;
let techList;

seeProjectBtn.forEach((e) => {
  e.addEventListener('click', () => {
    const idx = arr.indexOf(e);
    const { description, live, source } = projects[idx];
    const descriptionElement = (popUpDescription.querySelector('p'));
    targetCard = e.parentElement.parentElement;
    targetCardTitle = targetCard.querySelector('h3');
    targetCardBtns = targetCard.querySelector('.btn-container');
    techList = targetCard.querySelector('ul');
    targetCardTitle.removeAttribute('class');
    popUpHeading.appendChild(targetCardTitle);
    popUpHeading.appendChild(techList);
    descriptionElement.innerHTML = description;
    popUp.classList.toggle('hide');
    liveBtn.addEventListener('click', () => {
      window.location.href = live;
    });
    sourceBtn.addEventListener('click', () => {
      window.location.href = source;
    });
  });
});

cancelDesktop.addEventListener('click', () => {
  popUp.classList.add('hide');
  popUpHeading.removeChild(targetCardTitle);
  popUpHeading.removeChild(techList);
  targetCardTitle.classList.add('project-title');
  targetCard.insertBefore(targetCardTitle, targetCardBtns);
  targetCard.insertBefore(techList, targetCardBtns);
});

cancelMobile.addEventListener('click', () => {
  popUp.classList.add('hide');
  popUpHeading.removeChild(targetCardTitle);
  popUpHeading.removeChild(techList);
  targetCardTitle.classList.add('project-title');
  targetCard.insertBefore(targetCardTitle, targetCardBtns);
  targetCard.insertBefore(techList, targetCardBtns);
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    popUp.classList.add('hide');
    popUpHeading.removeChild(targetCardTitle);
    popUpHeading.removeChild(techList);
    targetCardTitle.classList.add('project-title');
    targetCard.insertBefore(targetCardTitle, targetCardBtns);
    targetCard.insertBefore(techList, targetCardBtns);
  }
});

/* Contact Validation */
const form = document.querySelector('.form');
const fullNameInput = form.full_name;
const errorElement = document.querySelector('.validation-message');
const errorMessage = 'The email address should be in lowercase.';
const emailInput = form.email;
const submitBtn = form.submit;

submitBtn.addEventListener('click', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorElement.textContent = errorMessage;
    event.preventDefault();
  } else {
    fullNameInput.removeAttribute('required');
  }
});

/* Animation feature > Appear and disappear Nav-bar by clicking a specific key */
/* Animation feature > Nav-bar link to specific section */
/* Arrow hover feature > Make the arrow before the work section clickable and giving it a hover */
/* Give nav-bar a green border */
