function removeAllListeners() {
arma2P.removeEventListener('click', cura);
arma1P.removeEventListener('click', cf);
arma3P.removeEventListener('click', cr);
arma4P.removeEventListener('click', dadiDoppi);
arma5P.removeEventListener('click', ccacca);
}

//chiamata da chkLife
function offBattle() {
let k = 0;
let pedine = document.getElementsByClassName('ped');
  for (k = 0; k < pedine.length; k++) {
    pedine[k].removeEventListener('click', frustaP[k]);
	pedine[k].style.cursor = 'auto';
  }
aggGG();
  if (popupLife > 0) {
  setTimeout(iniziaTurno, 1500);
  } else {
  setTimeout(cambiaTurno, 1500); 
  }  
}

//FRUSTA

function createFrusta(ind) {
this.ind = ind;
let k = 0;
let pedine = document.getElementsByClassName('ped');
  for (k = 0; k < pedine.length; k++) {
  if (k == this.ind) {continue;};
  pedine[k].addEventListener('click', frustaP[k]);
  pedine[k].style.cursor = 'pointer';
  }
removeAllListeners();
tabP.style.display = 'none';
sound1.src = 'snd/frusta.mp3';
sound1.load();
}
/*
function createFrusta(ind) {
this.ind = ind;
let k = 1;
let pedine = document.getElementsByClassName('ped');

  pedine[1].addEventListener('click', frustaG2);
  pedine[1].style.cursor = 'pointer';
    	document.getElementById('test2').innerHTML += frustaP[1];
}*/
 
 
function frustaG1() {
sound1.play();
ped1.life -= (20 + popupPower);
ped1.power -= 10;
ped1.gold -= 10;
chkLife();
}
 
function frustaG2() {
sound1.play();
ped2.life -= (20 + popupPower);
ped2.power -= 10;
ped2.gold -= 10;
chkLife();
}
 
function frustaG3() {
sound1.play();
ped3.life -= (20 + popupPower);
ped3.power -= 10;
ped3.gold -= 10;
chkLife();
}
 
function frustaG4() {
sound1.play();
ped4.life -= (20 + popupPower);
ped4.power -= 10;
ped4.gold -= 10;
chkLife();
}

//CURA

function cura() {
removeAllListeners();
  switch(indPopup) {
  case 0:
  ped1.life += 20;
  ped1.gold -= 20;
  break;
  case 1:
  ped2.life += 20;
  ped2.gold -= 20;
  break;
  case 2:
  ped3.life += 20;
  ped3.gold -= 20;
  break;
  case 3:
  ped4.life += 20;
  ped4.gold -= 20;
  break;
  }
aggGG();
iniziaTurno();  
}

//RAZZO

function razzoa(ind) {
tabP.style.display = 'none';
removeAllListeners();
this.ind = ind;
let k = 0;
let pedine = document.getElementsByClassName('ped');
  for (k = 0; k < pedine.length; k++) {
  if (k == this.ind) {continue;};
  pedine[k].addEventListener('click', razzoP[k]);
  pedine[k].style.cursor = 'pointer';
  }
sound1.src = 'snd/rocket1.mp3';
sound1.load();
sound2.src = 'snd/blast2.mp3';
sound2.load();
}
 
function razzoG1() {
xTemp = ped1.x;
yTemp = ped1.y;
razzob();
colpo = 1;
}
 
function razzoG2() {
xTemp = ped2.x;
yTemp = ped2.y;
razzob();
colpo = 2;
}
 
function razzoG3() {
xTemp = ped3.x;
yTemp = ped3.y;
razzob();
colpo = 3;
}
 
function razzoG4() {
xTemp = ped4.x;
yTemp = ped4.y;
razzob();
colpo = 4;
}
 
function razzob() {
  switch(indPopup) {
  case 0:
  xGTemp = ped1.x;
  yGTemp = ped1.y;
  break;
  case 1:
  xGTemp = ped2.x;
  yGTemp = ped2.y;
  break;
  case 2:
  xGTemp = ped3.x;
  yGTemp = ped3.y;
  break;
  case 3:
  xGTemp = ped4.x;
  yGTemp = ped4.y;
  break;
  }
let pedine = document.getElementsByClassName('ped');
  for (k = 0; k < pedine.length; k++) {
  pedine[k].removeEventListener('click', razzoP[k]);
  pedine[k].style.cursor = 'auto';
  }
razzoc();
}
 
function razzoc() {
  razzoImg.style.left = xGTemp + 'px';
  razzoImg.style.top = yGTemp + 'px';
  razzoImg.style.display = 'block';
  sound1.play();
  razzod();
}
 
function razzod() {
  if (xGTemp > xTemp && yGTemp > yTemp) {
  xGTemp -= 1;
  yGTemp -= 1; 
  aggRazzo();
  setTimeout(razzod, 10); 
  } else if (xGTemp > xTemp && yGTemp < yTemp) {
  xGTemp -= 1;
  yGTemp += 1; 
  aggRazzo();
  setTimeout(razzod, 10);
  } else if (xGTemp < xTemp && yGTemp > yTemp) {
  xGTemp += 1;
  yGTemp -= 1; 
  aggRazzo();
  setTimeout(razzod, 10);
  } else if (xGTemp < xTemp && yGTemp < yTemp) {
  xGTemp += 1;
  yGTemp += 1; 
  aggRazzo();
  setTimeout(razzod, 10);
  } else if (xGTemp == xTemp && yGTemp > yTemp) {
  yGTemp -= 1; 
  aggRazzo();
  setTimeout(razzod, 10);
  } else if (xGTemp == xTemp && yGTemp < yTemp) {
  yGTemp += 1; 
  aggRazzo();
  setTimeout(razzod, 10);
  } else if (xGTemp < xTemp && yGTemp == yTemp) {
  xGTemp += 1;
  aggRazzo();
  setTimeout(razzod, 10);
  } else if (xGTemp > xTemp && yGTemp == yTemp) {
  xGTemp -= 1;
  aggRazzo();
  setTimeout(razzod, 10);
  } else if (xGTemp == xTemp && yGTemp == yTemp) {
  boomRazzo();
  }
}
 

function aggRazzo() {
razzoImg.style.left = xGTemp + 'px';
razzoImg.style.top = yGTemp + 'px';
}
 
function boomRazzo() {
razzoImg.src = 'img/boom.png';
  switch(colpo) {
  case 1:
  ped1.life -= (40 + popupPower);
  break;
  case 2:
  ped2.life -= (40 + popupPower);
  break;
  case 3:
  ped3.life -= (40 + popupPower);
  break;
  case 4:
  ped4.life -= (40 + popupPower);
  break;
  }
sound1.pause();
sound2.play();
setTimeout(endRazzo, 1500);
}

function endRazzo() {
razzoImg.style.display = 'none';
razzoImg.src = 'img/razzo.png';
sound1.src = '';
sound2.src = '';
aggGG();
chkLife();
}

//dadi doppi

function dadiDoppi() {
dadi2 = 'on';
bottoneP.removeEventListener('click', dado1);
bottoneP.addEventListener('click', dado2);
bottoneP.innerHTML = 'Tira due dadi!';
bottoneP.style.color = 'red';
removeAllListeners();
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
aggGG();
iniziaTurno();
}

//CACCA

function creaCacca() {
casTemp.cacca = 1;
casTemp.life -= 10;
casTemp.gold -= 10;
caccaImg = document.createElement("DIV");
caccaImg.innerHTML = '<img src="img/cacca.png" style="width:40px;height:40px;z-index:2">';
att1 = document.createAttribute("id");
att1.value = casTemp.idcacca;
att2 = document.createAttribute("style");
att2.value = "position:absolute;display:none";
caccaImg.setAttributeNode(att1);
caccaImg.setAttributeNode(att2);
caccaImg.style.display = 'block';
document.body.appendChild(caccaImg);
caccaImg.style.top = casTemp.y1 - 30 + 'px';
caccaImg.style.left = casTemp.x1 + 20 + 'px';
  switch(indPopup) {
  case 0:
  ped1.gold -= 10;
  break;
  case 1:
  ped2.gold -= 10;
  break;
  case 2:
  ped3.gold -= 10;
  break;
  case 3:
  ped4.gold -= 10;
  break;
  }
removeAllListeners();
aggGG();
iniziaTurno();
}
