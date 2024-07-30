function chkWin1() {
	if (ped1.life != 0 && ped2.life == 0 && ped3.life == 0 && ped4.life == 0) {
		sound2.src = 'snd/gmwin.mp3';
        sound2.play();
		alertF.innerHTML = ped1.nome + ',<br>' + txtWin1;
        tabF.style.display = 'block';
        } else if (ped1.life != 0 && ped2.life == 0 && ped3.life == 0 && ped4.life == 'x') {
		sound2.src = 'snd/gmwin.mp3';
        sound2.play();
		alertF.innerHTML = ped1.nome + ',<br>' + txtWin1;
        tabF.style.display = 'block'; 
        } else if (ped1.life != 0 && ped2.life == 0 && ped3.life == 'x' && ped4.life == 'x') {
		sound2.src = 'snd/gmwin.mp3';
        sound2.play();
		alertF.innerHTML = ped1.nome + ',<br>' + txtWin1;
        tabF.style.display = 'block'; 
        } else if (ped1.life == 0 && ped2.life != 0 && ped3.life == 0 && ped4.life == 0) {
		sound2.src = 'snd/gmwin.mp3';
        sound2.play();
		alertF.innerHTML = ped2.nome + '<br>' + txtWin1;
        tabF.style.display = 'block';
	    } else if (ped1.life == 0 && ped2.life != 0 && ped3.life == 0 && ped4.life == 'x') {
		sound2.src = 'snd/gmwin.mp3';
        sound2.play();
		alertF.innerHTML = ped1.nome + ',<br>' + txtWin1;
        tabF.style.display = 'block'; 
        } else if (ped1.life == 0 && ped2.life != 0 && ped3.life == 'x' && ped4.life == 'x') {
		sound2.src = 'snd/gmwin.mp3';
        sound2.play();
		alertF.innerHTML = ped1.nome + ',<br>' + txtWin1;
        tabF.style.display = 'block'; 
        } else if (ped1.life == 0 && ped2.life == 0 && ped3.life != 0 && ped4.life == 0) {
		sound2.src = 'snd/gmwin.mp3';
        sound2.play();
		alertF.innerHTML = ped3.nome + '<br>' + txtWin1;
        tabF.style.display = 'block';
	    } else if (ped1.life == 0 && ped2.life == 0 && ped3.life != 0 && ped4.life == 'x') {
		sound2.src = 'snd/gmwin.mp3';
        sound2.play();
		alertF.innerHTML = ped3.nome + '<br>' + txtWin1;
        tabF.style.display = 'block';
	    } else if (ped1.life == 0 && ped2.life == 0 && ped3.life == 0 && ped4.life != 0) {
		sound2.src = 'snd/gmwin.mp3';
        sound2.play();
		alertF.innerHTML = ped4.nome + '<br>' + txtWin1;
        tabF.style.display = 'block';
	    } else if (ped1.life == 0 && ped2.life == 0 && ped3.life == 0 && ped4.life == 0) {
		alertF.innerHTML = 'Pareggio!';
        tabF.style.display = 'block';
	    } else if (ped1.life == 0 && ped2.life == 0 && ped3.life == 0 && ped4.life == 'x') {
		alertF.innerHTML = 'Pareggio!';
        tabF.style.display = 'block';
	    } else if (ped1.life == 0 && ped2.life == 0 && ped3.life == 'x' && ped4.life == 'x') {
		alertF.innerHTML = 'Pareggio!';
        tabF.style.display = 'block';
	    } else {
		offBattle();
	}
}

function win1() {
  switch(indPopup) {
  case 0:
  sound2.src = 'snd/gmwin.mp3';
  sound2.play();
  alertF.innerHTML = ped1.nome + ',<br>' + txtCas;
  tabF.style.display = 'block';
  break;
  case 1:
  sound2.src = 'snd/gmwin.mp3';
  sound2.play();
  alertF.innerHTML = ped2.nome + ',<br>' + txtCas;
  tabF.style.display = 'block';
  break;
  case 2:
  sound2.src = 'snd/gmwin.mp3';
  sound2.play();
  alertF.innerHTML = ped3.nome + ',<br>' + txtCas;
  tabF.style.display = 'block';
  break;
  case 3:
  sound2.src = 'snd/gmwin.mp3';
  sound2.play();
  alertF.innerHTML = ped4.nome + ',<br>' + txtCas;
  tabF.style.display = 'block';
  break;
  }
}