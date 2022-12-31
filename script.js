
// navigation
const navHome = document.querySelector('#home')
const navDestination = document.querySelector('#destination')


//wrapper
const hWrapper = document.querySelector('.home-wrapper')
const dWrapper = document.querySelector('.destination-wrapper')

// body
const body = document.querySelector('body');
const home = document.querySelector('.home')
const destination = document.querySelector('.destination')


const explore = document.querySelector('.p4')

// Main navigation

navHome.addEventListener('click', function() {
    home.style.opacity = 1;
    hWrapper.style.zIndex = 1;
    destination.style.opacity = 0;
    dWrapper.style.zIndex = 0;
    body.style.backgroundImage = "url('images/Home/background-home-desktop.jpg')";
  });

navDestination.addEventListener('click', function() {
    home.style.opacity = 0;
    hWrapper.style.zIndex = 0;
    destination.style.opacity = 1;
    dWrapper.style.zIndex = 1;
    body.style.backgroundImage = "url('images/destination/background-destination-desktop.jpg')";
  });

  explore.addEventListener('click', function() {
    home.style.opacity = 0;
    hWrapper.style.zIndex = 0;
    destination.style.opacity = 1;
    dWrapper.style.zIndex = 1;
    body.style.backgroundImage = "url('images/destination/background-destination-desktop.jpg')";
  });

// Destination Navigation

const moon = document.querySelector('#moon')
const mars = document.querySelector('#mars')
const europa = document.querySelector('#europa')
const titan = document.querySelector('#titan')

//  Destination Navigation changable

const planetImg = document.querySelector('#planet-img')
const planet = document.querySelector('#planet')
const description = document.querySelector('#description')
const distance = document.querySelector('#distance')
const time = document.querySelector('#time')

// Function

moon.addEventListener('click', function() {
    planet.textContent = "Moon"
    description.textContent = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    distance.textContent = "384,400 km"
    time.textContent = "3 days"
    planetImg.setAttribute("src", "images/destination/image-moon.webp")
  });

  europa.addEventListener('click', function() {
    planet.textContent = "Europa"
    description.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    distance.textContent = "628 mil. km"
    time.textContent = "3 years"
    planetImg.setAttribute("src", "images/destination/image-europa.webp")
  });

  mars.addEventListener('click', function() {
    planet.textContent = "Mars"
    description.textContent = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    distance.textContent = "225 mil. km"
    time.textContent = "9 months"
    planetImg.setAttribute("src", "images/destination/image-mars.webp")
  });

  titan.addEventListener('click', function() {
    planet.textContent = "Titan"
    description.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    distance.textContent = "1.6 bil. km"
    time.textContent = "7 years"
    planetImg.setAttribute("src", "images/destination/image-titan.webp")
  });
