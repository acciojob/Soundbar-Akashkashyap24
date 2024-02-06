let btns = document.querySelectorAll('.btn');
let stop = document.querySelector('#stop');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    new Audio('sounds/' + btn.innerText + '.mp3').play();
  });
	stop.addEventListener('click', ()=>{
	Audio().pause();
})
});
