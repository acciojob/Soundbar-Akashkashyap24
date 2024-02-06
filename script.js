let btns = document.querySelectorAll('.btn');
let stop = document.querySelector('#stop');
let currentAudio = null; // to keep track of the currently playing audio

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (currentAudio) { // if there's an audio playing, stop it
      currentAudio.pause();
    }
    currentAudio = new Audio('sounds/' + btn.innerText + '.mp3');
    currentAudio.play();
  });
});

stop.addEventListener('click', () => {
  if (currentAudio) { // if there's an audio playing, stop it
    currentAudio.pause();
  }
});