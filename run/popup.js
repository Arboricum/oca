function apriPopupPost() {
bottoneP.addEventListener('click', chiudiPopupTest);
bottoneP.innerHTML = 'Ok';
nomeP.innerHTML = '<b>' + popupNome + ': </b>';
vitaP.innerHTML = ' Vita = <span style="color:green">' + popupLife + '</span>';
forzaP.innerHTML = 'Forza = <span style="color:purple">' + popupPower + '</span>';
oroP.innerHTML = 'Oro = <span style="color:orange">' + popupGold + '</span>';
  if (popupLife > 0) {
	  txtCasP.innerHTML = txtCas;
  } else {
      txtCasP.innerHTML = 'Sei morto!';
  }	  
btnArmiDiv.style.display = 'none';
tabP.style.display = 'block';
aggGG();
  if (trasp == 1) {
    if (casTemp != casella31 && casTemp != casella85) {sound1.src = 'snd/magic.mp3'} else if (casTemp == casella31 || casTemp == casella85)  {sound1.src = 'snd/cacca.mp3'}
  sound1.play();
    if (popupLife > 0) {
    sound1.addEventListener('pause', vc);
	bottoneP.removeEventListener('click', chiudiPopupTest);
    bottoneP.style.visibility = 'hidden';
    }
  } else {
  bottoneP.style.visibility  = 'visible';
  }
  if (casTemp.cacca == 1) {
  sound1.src = 'snd/ops.mp3';
  sound1.play();
  let parent = document.body;
  let child = document.getElementById(casTemp.idcacca);
  parent.removeChild(child);
  casTemp.cacca = 0;
  casTemp.life = casTemp.ld;
  casTemp.gold = casTemp.gd;
  txtCasP.innerHTML = txtCas + "<br>Hai pestato una cacca,<br>perdi 10 punti vita e 10 pezzi d'oro!";
  }
  if (rad == 1) {
  sound2.src = 'snd/raddoppio.mp3';
  sound2.play();
  sound2.addEventListener('pause', rd);
  bottoneP.removeEventListener('click', chiudiPopupTest);
  bottoneP.style.visibility = 'hidden';
  } else if (rad == 0 && trasp == 0) {
  bottoneP.style.visibility  = 'visible';
  } else if (rad == 0 && trasp == 1) {
  bottoneP.style.visibility  = 'hidden';
  }
  if (popupLife <= 0) {
  setTimeout(chkLife, 1500);
  }
}
 
vc =  function() {
tabP.style.display = 'none';
sound1.removeEventListener('pause', vc);
sound1.src = '';
trasp = 0;
setTimeout(vaiCas, 800);
}

rd = function() {
tabP.style.display = 'none';
sound2.removeEventListener('pause', rd);
sound2.src = '';
i = 1;
rad = 0;
setTimeout(valutaTurno2, 800);
}
 
function chiudiPopupTest() {
tabP.style.display = 'none';
nomeP.innerHTML = "";
vitaP.innerHTML = "";
forzaP.innerHTML = "";
oroP.innerHTML = "";
txtCasP.innerHTML = "";
bottoneP.removeEventListener('click', chiudiPopupTest);
cambiaTurno();
}

cf = function() {
  if (popupGold >= 20) {
    switch(indPopup) {
      case 0:
      ped1.gold -= 20;
      break;
      case 1:
      ped2.gold -= 20;
      break;
      case 2:
      ped3.gold -= 20;
      break;
      case 3:
      ped4.gold -= 20;
      break;
    }	  
  createFrusta(indPopup);
  } else {
  document.getElementById('alert').innerHTML = 'Non hai abbastanza oro!';  
  setTimeout(clearAlert, 1000);
  }
}
cr = function() {
  if (popupGold >= 40) {
	switch(indPopup) {
      case 0:
      ped1.gold -= 40;
      break;
      case 1:
      ped2.gold -= 40;
      break;
      case 2:
      ped3.gold -= 40;
      break;
      case 3:
      ped4.gold -= 40;
      break;
    }
  razzoa(indPopup);
  } else {
  document.getElementById('alert').innerHTML = 'Non hai abbastanza oro!';
  setTimeout(clearAlert, 1000);  
  }
}
cc = function() {
  if (popupGold >= 20) {
  cura();
  } else {
  document.getElementById('alert').innerHTML = 'Non hai abbastanza oro!';  
  setTimeout(clearAlert, 1000);
  }
} 
dd = function() {
  if (popupGold >= 40) {
  dadiDoppi();
  } else {
  document.getElementById('alert').innerHTML = 'Non hai abbastanza oro!';  
  setTimeout(clearAlert, 1000);
  }
} 
ccacca = function() {
  switch(indPopup) {
	case 0:
	  casella = ped1.cas;
	  ccacca1();
	break;
	case 1:
	  casella = ped2.cas;
	  ccacca1();
	break;
	case 2:
	  casella = ped3.cas;
	  ccacca1();
	break;
	case 3:
	  casella = ped4.cas;
	  ccacca1();
	break;
  }
} 

function ccacca1() {
    if (popupGold >= 10) {
      switch(popupCas) {
        case 0:
	    document.getElementById('alert').innerHTML = 'Puoi usare "Cacca" solo dalla casella 1';
	    setTimeout(clearAlert, 1000);
        break;
        case 2:
	    document.getElementById('alert').innerHTML = 'Non puoi usare "Cacca" su questa casella';
	    setTimeout(clearAlert, 1000);
        break;
        case 11:
	    document.getElementById('alert').innerHTML = 'Non puoi usare "Cacca" su questa casella';
	    setTimeout(clearAlert, 1000);
        break;
        case 30:
	    document.getElementById('alert').innerHTML = 'Non puoi usare "Cacca" su questa casella';
	    setTimeout(clearAlert, 1000);
        break;
        case 41:
	    document.getElementById('alert').innerHTML = 'Non puoi usare "Cacca" su questa casella';
	    setTimeout(clearAlert, 1000);
        break;
        case 42:
	    document.getElementById('alert').innerHTML = 'Non puoi usare "Cacca" su questa casella';
	    setTimeout(clearAlert, 1000);
        break;
		case 44:
	    document.getElementById('alert').innerHTML = 'Non puoi usare "Cacca" su questa casella';
	    setTimeout(clearAlert, 1000);
        break;
        case 62:
	    document.getElementById('alert').innerHTML = 'Non puoi usare "Cacca" su questa casella';
	    setTimeout(clearAlert, 1000);
        break;
        case 77:
	    document.getElementById('alert').innerHTML = 'Non puoi usare "Cacca" su questa casella';
	    setTimeout(clearAlert, 1000);
        break;
        default:
	    valutaCasella1();
        creaCacca();
        break;
        }
    } else if (popupGold < 10) {
    document.getElementById('alert').innerHTML = 'Non hai abbastanza oro!';
    setTimeout(clearAlert, 1000);
    }
}

function clearAlert() {
document.getElementById('alert').innerHTML = '';
}

function apriPopupPre() {
txtCasP.innerHTML = '';
arma5P.addEventListener('click', ccacca);
arma5P.innerHTML = '<img src="img/cacca.png" width="50px" height="50px">';
arma1P.addEventListener('click', cf);
arma1P.innerHTML = '<img src="img/frusta.jpg" width="50px" height="50px">';
arma2P.addEventListener('click', cc);
arma2P.innerHTML = '<img src="img/cura.jpg" width="50px" height="50px">';
arma3P.addEventListener('click', cr);
arma3P.innerHTML = '<img src="img/razzo.png" width="50px" height="50px">';
arma4P.addEventListener('click', dd);
arma4P.innerHTML = '<img src="img/2dadi.png" width="50px" height="50px">';
nomeP.innerHTML = '<b>' + popupNome + ': </b>';
vitaP.innerHTML = ' Vita = <span style="color:green">' + popupLife + '</span>';
forzaP.innerHTML = 'Forza = <span style="color:purple">' + popupPower + '</span>';
oroP.innerHTML = 'Oro = <span style="color:orange">' + popupGold + '</span>';
tabP.style.display = 'block';
btnArmiDiv.style.display = 'block';
//dadi2 off in dado2(), dadi.js
  if (dadi2 == 'off' && popupTf == 0) {
  bottoneP.addEventListener('click', dado1);
  bottoneP.style.color = 'black';
  bottoneP.innerHTML = 'Tira<br>i dadi';
  } else if (dadi2 == 'off' && popupTf == 2) {
  txtCasP.innerHTML = 'Devi rimanere fermo per due turni';
  bottoneP.addEventListener('click', cambiaTurno);
  bottoneP.style.color = 'black';
  bottoneP.innerHTML = 'Ok';
  fermoT();
  } else if (dadi2 == 'off' && popupTf == 1) {
  txtCasP.innerHTML = 'Rimani fermo ancora un turno';
  bottoneP.addEventListener('click', cambiaTurno);
  bottoneP.style.color = 'black';
  bottoneP.innerHTML = 'Ok';
  fermoT();
  }
aggGG();
}