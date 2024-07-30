//in arrivopn si sommano i valori ped a quelli delle caselle, ad es. ped1.gold += goldTemp;

function muovip1() {
  if (i <= contDado && ped1.cas <= 16) {
  ped1.x += xP;
  ped1.position();
  i++;
  ped1.cas += 1;
  soundG1.play();
  } else if (i <= contDado && ped1.cas > 16 && ped1.cas <= 20) {
  ped1.y += yP;
  ped1.position();
  i++;
  ped1.cas += 1;
  soundG1.play();
  } else if (i <= contDado && ped1.cas > 20 && ped1.cas <= 37) {
  ped1.x -= xP;
  ped1.position();
  i++;
  ped1.cas += 1;
  soundG1.play();
  } else if (i <= contDado && ped1.cas > 37 && ped1.cas <= 40) {
  ped1.y -= yP;
  ped1.position();
  i++;
  ped1.cas += 1;
  soundG1.play();
  } else if (i <= contDado && ped1.cas > 40 && ped1.cas <= 56) {
  ped1.x += xP;
  ped1.position();
  i++;
  ped1.cas += 1;
  soundG1.play();
  } else if (i <= contDado && ped1.cas > 56 && ped1.cas <= 58) {
  ped1.y += yP;
  ped1.position();
  i++;
  ped1.cas += 1;
  soundG1.play();
  } else if (i <= contDado && ped1.cas > 58 && ped1.cas <= 73) {
  ped1.x -= xP;
  ped1.position();
  i++;
  ped1.cas += 1;
  soundG1.play();
  } else if (i <= contDado && ped1.cas > 73 && ped1.cas <= 74) {
  ped1.y -= yP;
  ped1.position();
  i++;
  ped1.cas += 1;
  soundG1.play();
  } else if (i <= contDado && ped1.cas > 74 && ped1.cas < 88) {
  ped1.x += xP;
  ped1.position();
  i++;
  ped1.cas += 1;
  soundG1.play();
  } else if (i <= contDado && ped1.cas == 88) {
  muovip1F();
  } else if (i > contDado && ped1.cas != 88) {
  casella = ped1.cas
  ped1.gold += 10;
  valutaCasella1();
  arrivop1();
  } else if (i > contDado && ped1.cas == 88) {
  casella = ped1.cas
  valutaCasella1();
  win1();
  }
}

function muovip1F() {
 if (i <= contDado) {
   ped1.x -= xP;
   ped1.position();
   i++;
   ped1.cas -= 1;
   soundG1.play();
   muovip1F();
 } else {
 casella = ped1.cas
 ped1.gold += 10;
 valutaCasella1();
 arrivop1();
 }
}

function arrivop1() {
ped1.gold += goldTemp;
ped1.power += powerTemp;
ped1.life += lifeTemp;
ped1.tf = tfTemp;
popupNome = ped1.nome;
popupGold = ped1.gold;
popupPower = ped1.power;
popupLife = ped1.life;
soundG1.removeEventListener('pause', muovip1);
 
/*  if (bomba == 1) {
  var pedine = document.getElementsByClassName('ped');
  t = 0;
    for (t = 0; t < pedine.length; t++) {
    if (t == 0) {continue;}
    pedine[t].life -= 5;
	document.getElementById('test2').innerHTML = 'bomba';
    }
   bomba = 0;
  }
 
  if (terremoto == 1) {
  let pedine = document.getElementsByClassName('ped');
  t = 0;
    for (t = 0; t < pedine.length; t++) {
    pedine[t].life -= 10;
    }
  }
*/ 
apriPopupPost();
}

function muovip2() {
  if (i <= contDado && ped2.cas <= 16) {
  ped2.x += xP;
  ped2.position();
  i++;
  ped2.cas += 1;  
  soundG2.play();
  } else if (i <= contDado && ped2.cas > 16 && ped2.cas <= 20) {
  ped2.y += yP;
  ped2.position();
  i++;
  ped2.cas += 1;
  soundG2.play();
  } else if (i <= contDado && ped2.cas > 20 && ped2.cas <= 37) {
  ped2.x -= xP;
  ped2.position();
  i++;
  ped2.cas += 1;
  soundG2.play();
  } else if (i <= contDado && ped2.cas > 37 && ped2.cas <= 40) {
  ped2.y -= yP;
  ped2.position();
  i++;
  ped2.cas += 1;
  soundG2.play();
  } else if (i <= contDado && ped2.cas > 40 && ped2.cas <= 56) {
  ped2.x += xP;
  ped2.position();
  i++;
  ped2.cas += 1;
  soundG2.play();
  } else if (i <= contDado && ped2.cas > 56 && ped2.cas <= 58) {
  ped2.y += yP;
  ped2.position();
  i++;
  ped2.cas += 1;
  soundG2.play();
  } else if (i <= contDado && ped2.cas > 58 && ped2.cas <= 73) {
  ped2.x -= xP;
  ped2.position();
  i++;
  ped2.cas += 1;
  soundG2.play();
  } else if (i <= contDado && ped2.cas > 73 && ped2.cas <= 74) {
  ped2.y -= yP;
  ped2.position();
  i++;
  ped2.cas += 1;
  soundG2.play();
  } else if (i <= contDado && ped2.cas > 74 && ped2.cas < 88) {
  ped2.x += xP;
  ped2.position();
  i++;
  ped2.cas += 1;
  soundG2.play();
  } else if (i <= contDado && ped2.cas == 88) {
  muovip2F();
  } else if (i > contDado && ped2.cas != 88) {
  casella = ped2.cas
  ped2.gold += 10;
  valutaCasella1();
  arrivop2();
  } else if (i > contDado && ped2.cas == 88) {
  casella = ped2.cas
  valutaCasella1();
  win1();
  }
}

function muovip2F() {
 if (i <= contDado) {
   ped2.x -= xP;
   ped2.position();
   i++;
   ped2.cas -= 1;
   soundG1.play();
   muovip2F();
 } else {
 casella = ped2.cas
 ped2.gold += 10;
 valutaCasella1();
 arrivop2();
 }
}
 
function arrivop2() {
ped2.gold += goldTemp;
ped2.power += powerTemp;
ped2.life += lifeTemp;
ped2.tf = tfTemp;
popupNome = ped2.nome;
popupGold = ped2.gold;
popupPower = ped2.power;
popupLife = ped2.life;
soundG2.removeEventListener('pause', muovip2);
 /*
  if (bomba == 1) {
  var pedine = document.getElementsByClassName('ped');
  t = 0;
    for (t = 0; t < pedine.length; t++) {
    if (t == 1) {continue;}
    pedine[t].life -= 5;
    }
  }
 
  if (terremoto == 1) {
  var pedine = document.getElementsByClassName('ped');
  t = 0;
    for (t = 0; t < pedine.length; t++) {
    pedine[t].life -= 10;
    }
  }
*/ 
apriPopupPost();
}

function muovip3() {
  if (i <= contDado && ped3.cas <= 16) {
  ped3.x += xP;
  ped3.position();
  i++;
  ped3.cas += 1;  
  soundG3.play();
  } else if (i <= contDado && ped3.cas > 16 && ped3.cas <= 20) {
  ped3.y += yP;
  ped3.position();
  i++;
  ped3.cas += 1;
  soundG3.play();
  } else if (i <= contDado && ped3.cas > 20 && ped3.cas <= 37) {
  ped3.x -= xP;
  ped3.position();
  i++;
  ped3.cas += 1;
  soundG3.play();
  } else if (i <= contDado && ped3.cas > 37 && ped3.cas <= 40) {
  ped3.y -= yP;
  ped3.position();
  i++;
  ped3.cas += 1;
  soundG3.play();
  } else if (i <= contDado && ped3.cas > 40 && ped3.cas <= 56) {
  ped3.x += xP;
  ped3.position();
  i++;
  ped3.cas += 1;
  soundG3.play();
  } else if (i <= contDado && ped3.cas > 56 && ped3.cas <= 58) {
  ped3.y += yP;
  ped3.position();
  i++;
  ped3.cas += 1;
  soundG3.play();
  } else if (i <= contDado && ped3.cas > 58 && ped3.cas <= 73) {
  ped3.x -= xP;
  ped3.position();
  i++;
  ped3.cas += 1;
  soundG3.play();
  } else if (i <= contDado && ped3.cas > 73 && ped3.cas <= 74) {
  ped3.y -= yP;
  ped3.position();
  i++;
  ped3.cas += 1;
  soundG3.play();
  } else if (i <= contDado && ped3.cas > 74 && ped3.cas < 88) {
  ped3.x += xP;
  ped3.position();
  i++;
  ped3.cas += 1;
  soundG3.play();
  } else if (i <= contDado && ped3.cas == 88) {
  muovip3F();
  } else if (i > contDado && ped3.cas != 88) {
  casella = ped3.cas
  ped3.gold += 10;
  valutaCasella1();
  arrivop3();
  } else if (i > contDado && ped3.cas == 88) {
  casella = ped3.cas
  valutaCasella1();
  win1();
  }
}

function muovip3F() {
 if (i <= contDado) {
   ped3.x -= xP;
   ped3.position();
   i++;
   ped3.cas -= 1;
   soundG3.play();
   muovip3F();
 } else {
 casella = ped3.cas
 ped3.gold += 10;
 valutaCasella1();
 arrivop3();
 }
}
 
function arrivop3() {
ped3.gold += goldTemp;
ped3.power += powerTemp;
ped3.life += lifeTemp;
ped3.tf = tfTemp;
popupNome = ped3.nome;
popupGold = ped3.gold;
popupPower = ped3.power;
popupLife = ped3.life;
soundG3.removeEventListener('pause', muovip3);
 /*
  if (bomba == 1) {
  var pedine = document.getElementsByClassName('ped');
  t = 0;
    for (t = 0; t < pedine.length; t++) {
    if (t == 2) {continue;}
    pedine[t].life -= 5;
    }
  }
 
  if (terremoto == 1) {
  var pedine = document.getElementsByClassName('ped');
  t = 0;
    for (t = 0; t < pedine.length; t++) {
    pedine[t].life -= 10;
    }
  }
*/ 
apriPopupPost();
}

function muovip4() {
  if (i <= contDado && ped4.cas <= 16) {
  ped4.x += xP;
  ped4.position();
  i++;
  ped4.cas += 1;  
  soundG4.play();
  } else if (i <= contDado && ped4.cas > 16 && ped4.cas <= 20) {
  ped4.y += yP;
  ped4.position();
  i++;
  ped4.cas += 1;
  soundG4.play();
  } else if (i <= contDado && ped4.cas > 20 && ped4.cas <= 37) {
  ped4.x -= xP;
  ped4.position();
  i++;
  ped4.cas += 1;
  soundG4.play();
  } else if (i <= contDado && ped4.cas > 37 && ped4.cas <= 40) {
  ped4.y -= yP;
  ped4.position();
  i++;
  ped4.cas += 1;
  soundG4.play();
  } else if (i <= contDado && ped4.cas > 40 && ped4.cas <= 56) {
  ped4.x += xP;
  ped4.position();
  i++;
  ped4.cas += 1;
  soundG4.play();
  } else if (i <= contDado && ped4.cas > 56 && ped4.cas <= 58) {
  ped4.y += yP;
  ped4.position();
  i++;
  ped4.cas += 1;
  soundG4.play();
  } else if (i <= contDado && ped4.cas > 58 && ped4.cas <= 73) {
  ped4.x -= xP;
  ped4.position();
  i++;
  ped4.cas += 1;
  soundG4.play();
  } else if (i <= contDado && ped4.cas > 73 && ped4.cas <= 74) {
  ped4.y -= yP;
  ped4.position();
  i++;
  ped4.cas += 1;
  soundG4.play();
  } else if (i <= contDado && ped4.cas > 74 && ped4.cas < 88) {
  ped4.x += xP;
  ped4.position();
  i++;
  ped4.cas += 1;
  soundG4.play();
  } else if (i <= contDado && ped4.cas == 88) {
  muovip4F();
  } else if (i > contDado && ped4.cas != 88) {
  casella = ped4.cas
  ped4.gold += 10;
  valutaCasella1();
  arrivop4();
  } else if (i > contDado && ped4.cas == 88) {
  casella = ped4.cas
  valutaCasella1();
  win1();
  }
}

function muovip4F() {
 if (i <= contDado) {
   ped4.x -= xP;
   ped4.position();
   i++;
   ped4.cas -= 1;
   soundG4.play();
   muovip4F();
 } else {
 casella = ped4.cas
 ped4.gold += 10;
 valutaCasella1();
 arrivop4();
 }
}
 
function arrivop4() {
ped4.gold += goldTemp;
ped4.power += powerTemp;
ped4.life += lifeTemp;
ped4.tf = tfTemp;
popupNome = ped4.nome;
popupGold = ped4.gold;
popupPower = ped4.power;
popupLife = ped4.life;
soundG4.removeEventListener('pause', muovip4);
 /*
  if (bomba == 1) {
  var pedine = document.getElementsByClassName('ped');
  t = 0;
    for (t = 3; t < pedine.length; t++) {
    if (t == 0) {continue;}
    pedine[t].life -= 5;
    }
  }
 
  if (terremoto == 1) {
  var pedine = document.getElementsByClassName('ped');
  t = 0;
    for (t = 0; t < pedine.length; t++) {
    pedine[t].life -= 10;
    }
  }
*/ 
apriPopupPost();
}

//chiamata da apriPopupPost
function vaiCas() {
  switch(indPopup) {
  case 0:
  ped1.y = y1Temp;
  ped1.x = x1Temp;
  ped1.position();
  ped1.cas += contCasTemp;
  casella = ped1.cas;
  break;
 
  case 1:
  ped2.y = y1Temp;
  ped2.x = x2Temp;
  ped2.position();
  ped2.cas += contCasTemp;
  casella = ped2.cas;
  break;
 
  case 2:
  ped3.y = y2Temp;
  ped3.x = x1Temp;
  ped3.position();
  ped3.cas += contCasTemp;
  casella = ped3.cas;
  break;
 
  case 3:
  ped4.y = y2Temp;
  ped4.x = x2Temp;
  ped4.position();
  ped4.cas += contCasTemp;
  casella = ped4.cas;
  break;
  }
sound1.src = '';
trasp = 0;
valutaCasella1();
apriPopupPost();
}




