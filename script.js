const openButton = document.querySelector('.button');
const closeButton = document.querySelector('.close-icon');
const trailerContainer = document.querySelector('.trailer-container');

openButton.addEventListener('click', ()=> {
  trailerContainer.classList.remove('active');
  const videoElement = document.querySelector('video');
})

closeButton.addEventListener('click', ()=> {
  trailerContainer.classList.add('active');
  videoElement.pause();
  videoElement.currentTime = 0;
})