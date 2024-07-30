/*function valutaTurno1() {
  switch(contTurno) {
	  case 1:
	  turno = 'p1';
	  break;
	  case 2:
	  turno = 'p2';
	  break;
	  case 3:
	  turno = 'p3';
	  break;
	  case 4:
	  turno = 'p4';
	  break;
  }
}*/

//chiamata da cambiaTurno
function valutaTurno1() {
  switch(contTurno) {
	  case 1:
	    if (ped1.life > 0) {
	    turno = 'p1';
        } else {
		contTurno += 1;
		valutaTurno1();
		}
	  break;
	  case 2:
	    if (ped2.life > 0) {
	    turno = 'p2';
        } else {
		contTurno += 1;
		valutaTurno1();
		}
	  break;
	  case 3:
	    if (ped3.life > 0) {
	    turno = 'p3';
        } else {
		contTurno += 1;
		valutaTurno1();
		}
	  break;
	  case 4:
	    if (ped4.life > 0) {
	    turno = 'p4';
        } else {
		contTurno = 1;
		valutaTurno1();
		}
	  break;
  }
}

//chiamata da facciaDado1
function valutaTurno2() {
  switch(turno) {
	  case 'p1':
	  soundG1.addEventListener('pause', muovip1);
	  muovip1();
	  break;
	  case 'p2':
	  soundG2.addEventListener('pause', muovip2);
	  muovip2();
	  break;
	  case 'p3':
	  soundG3.addEventListener('pause', muovip3);
	  muovip3();
	  break;
	  case 'p4':
	  soundG4.addEventListener('pause', muovip4);
	  muovip4();
	  break;
  }	
}

//chiamata da chiudiPopupTest o da offBattle
function cambiaTurno() {
bottoneP.removeEventListener('click', cambiaTurno);
i = 1;
    if (contTurno < 4) {
    contTurno += 1;
    } else {
	contTurno = 1;
	}
valutaTurno1();
iniziaTurno();
}

//prima funzione, turno e contTurno stabilite come var in main
function iniziaTurno() {
  switch(turno) {
  case 'p1':
  popupNome = ped1.nome;
  popupGold = ped1.gold;
  popupPower = ped1.power;
  popupLife = ped1.life;
  popupCas = ped1.cas;
  popupTf = ped1.tf;
  pedA1.focus();
  indPopup = 0;
  break;
  case 'p2':
  popupNome = ped2.nome;
  popupGold = ped2.gold;
  popupPower = ped2.power;
  popupLife = ped2.life;
  popupCas = ped2.cas;
  popupTf = ped2.tf;
  pedA2.focus();
  indPopup = 1;
  break;
  case 'p3':
  popupNome = ped3.nome;
  popupGold = ped3.gold;
  popupPower = ped3.power;
  popupLife = ped3.life;
  popupCas = ped3.cas;
  popupTf = ped3.tf;
  pedA3.focus();
  indPopup = 2;
  break;
  case 'p4':
  popupNome = ped4.nome;
  popupGold = ped4.gold;
  popupPower = ped4.power;
  popupLife = ped4.life;
  popupCas = ped4.cas;
  popupTf = ped4.tf;
  pedA4.focus();
  indPopup = 3;
  break;
  }
aggGG();
apriPopupPre();
}

//chiamato da apriPopupPre
function fermoT() {
  switch(indPopup) {
	  case 0:
	  ped1.tf -= 1;
	  break;
	  case 1:
	  ped2.tf -= 1;
	  break;
	  case 2:
	  ped3.tf -= 1;
	  break;
	  case 3:
	  ped4.tf -= 1;
	  break;
  }
}

function chkLife() {
soundM.src = 'snd/gmlost.mp3';
soundM.load();
  if (ped1.life <= 0 && ped1.img != '') {
  ped1.img = 'img/grave.png';
  ped1.create();
  soundM.play();
  soundM.addEventListener('pause', function () {
	  ped1.img = '';
      ped1.create();

	  });
  } else if (ped2.life <=0 && ped2.img != '') {
  ped2.img = 'img/grave.png';
  ped2.create();
  soundM.play();
  soundM.addEventListener('pause', function () {
	  ped2.img = '';
      ped2.create();

      });
  } else if (ped3.life <=0 && ped3.img != '') {
  ped3.img = 'img/grave.png';
  ped3.create();
  soundM.play();
  soundM.addEventListener('pause', function () {
	  ped3.img = '';
      ped3.create();

      });
  } else if (ped4.life <=0 && ped4.img != '') {
  ped4.img = 'img/grave.png';
  ped4.create();
  soundM.play();
  soundM.addEventListener('pause', function () {
	  ped4.img = '';
      ped4.create();

      });
  } 
  chkWin1();
aggGG();
}

