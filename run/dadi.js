function dado1() {
bottoneP.removeEventListener('click', dado1);
contDado = Math.floor(Math.random() * 10) + 1;
  if (contDado > 6) {
	  dado1();
  } else {
  contDado1 = contDado;
  facciaDado1();
  }
tabP.style.display = 'none';  
}

function dado2() {
	dadi2 = 'off';
	bottoneP.removeEventListener('click', dado2);
contDado = Math.floor(Math.random() * 10) + 1;
  if (contDado > 6) {
	  dado2();
  } else {
  contDado1 = contDado;
  dado3();
  }
bottoneP.removeEventListener('click', dado2);
tabP.style.display = 'none'; 
}

function dado3() {
contDado2 = Math.floor(Math.random() * 10) + 1;
  if (contDado2 > 6) {
	  dado2();
  } else {
  contDado += contDado2;
  facciaDado1();
  }
tabP.style.display = 'none';
}

function facciaDado1() {
sound1.src = 'snd/dadi.mp3';
sound1.play();
sound1.addEventListener('pause', imgDadi);
}

function facciaDado2() {
document.getElementsByClassName('popupD')[0].style.display = 'none';
d2.style.display = 'none';
contDado2 = 'x';
valutaTurno2();
}

function imgDadi() {
sound1.removeEventListener('pause', imgDadi);
sound1.src = '';
document.getElementsByClassName('popupD')[0].style.display = 'block';
  switch(contDado1) {
	case 1:
	d1.src = 'img/d1.png';
	break;
	case 2:
	d1.src = 'img/d2.png';
	break;
	case 3:
	d1.src = 'img/d3.png';
	break;
	case 4:
	d1.src = 'img/d4.png';
	break;
	case 5:
	d1.src = 'img/d5.png';
	break;
	case 6:
	d1.src = 'img/d6.png';
	break;
  }
  if (contDado2 != 'x') {
    switch(contDado2) {
	  case 1:
	  d2.src = 'img/d1.png';
	  break;
	  case 2:
	  d2.src = 'img/d2.png';
	  break;
	  case 3:
	  d2.src = 'img/d3.png';
	  break;
	  case 4:
	  d2.src = 'img/d4.png';
	  break;
	  case 5:
	  d2.src = 'img/d5.png';
	  break;
	  case 6:
	  d2.src = 'img/d6.png';
	  break;
    }
  d2.style.display = 'inline-block';
  }
setTimeout(facciaDado2, 1500);
}