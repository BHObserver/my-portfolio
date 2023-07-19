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
    description: 'This is the first one',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/todo/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/todo',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'This is the second one',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/randomcard/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/randomcard',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'This is the third one',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/patatapcloneproject/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/patatapcloneproject',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'This is the fourth one',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/message/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/message',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'This is the fifth one',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/mazegame/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/mazegame',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'This is the sixth one',
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
const liveBtn = document.querySelector('.see-live-btn').querySelector('a');
const sourceBtn = document.querySelector('.see-source-btn').querySelector('a');
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
    liveBtn.setAttribute('href', live);
    sourceBtn.setAttribute('href', source);
    popUp.classList.toggle('hide');
  });
});

cancelDesktop.addEventListener('click', () => {
  popUp.classList.add('hide');
  popUpHeading.removeChild(targetCardTitle);
  popUpHeading.removeChild(techList);
  targetCardTitle.classList.add('project-title');
  targetCard.insertBefore(targetCardTitle, targetCardBtns);
  targetCard.insertBefore(techList, targetCardBtns);
  liveBtn.removeAttribute('href');
  sourceBtn.removeAttribute('href');
});

cancelMobile.addEventListener('click', () => {
  popUp.classList.add('hide');
  popUpHeading.removeChild(targetCardTitle);
  popUpHeading.removeChild(techList);
  targetCardTitle.classList.add('project-title');
  targetCard.insertBefore(targetCardTitle, targetCardBtns);
  targetCard.insertBefore(techList, targetCardBtns);
  liveBtn.removeAttribute('href');
  sourceBtn.removeAttribute('href');
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    popUp.classList.add('hide');
    popUpHeading.removeChild(targetCardTitle);
    popUpHeading.removeChild(techList);
    targetCardTitle.classList.add('project-title');
    targetCard.insertBefore(targetCardTitle, targetCardBtns);
    targetCard.insertBefore(techList, targetCardBtns);
    liveBtn.removeAttribute('href');
    sourceBtn.removeAttribute('href');
  }
});

/* Animation feature > Appear and disappear Nav-bar by clicking a specific key */
/* Animation feature > Nav-bar link to specific section */
/* Arrow hover feature > Make the arrow before the work section clickable and giving it a hover */
/* Give nav-bar a green border */
