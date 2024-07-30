
function start2G() {
	clearForm();
numG = 2;
document.getElementsByClassName('popupS')[0].style.left = '665px';
document.getElementById('s1').style.display = 'none';
document.getElementById('s2').style.display = 'block';
document.getElementById('s2a').style.display = 'block';
document.getElementById('s2b').style.display = 'block';
document.getElementById('giocatori').style.visibility = 'visible';
}
function start3G() {
numG = 3;
document.getElementsByClassName('popupS')[0].style.left = '665px';
document.getElementById('s1').style.display = 'none';
document.getElementById('s2').style.display = 'block';
document.getElementById('s2a').style.display = 'block';
document.getElementById('s2b').style.display = 'block';
document.getElementById('s2c').style.display = 'block';
document.getElementById('giocatori').style.visibility = 'visible';
}
function start4G() {
numG = 4;
document.getElementsByClassName('popupS')[0].style.left = '665px';
document.getElementById('s1').style.display = 'none';
document.getElementById('s2').style.display = 'block';
document.getElementById('s2a').style.display = 'block';
document.getElementById('s2b').style.display = 'block';
document.getElementById('s2c').style.display = 'block';
document.getElementById('s2d').style.display = 'block';
document.getElementById('giocatori').style.visibility = 'visible';
}

//costruttore pedine, tf = turni fermo
function pedina(nome, x, y, ind, cas, img, life, power, gold, tf) {
this.nome = nome;
this.x = x;
this.y = y;
this.ind = ind;
this.cas = cas;
this.img = img;
this.life = life;
this.power = power;
this.gold = gold;
this.tf = tf;
this.position = function() {
  document.getElementsByClassName('ped')[ind].style.left = this.x + 'px';
  document.getElementsByClassName('ped')[ind].style.top = this.y + 'px';
  }
this.create = function() {
  document.getElementsByClassName('ped')[ind].src = this.img;
  }
}
 
function numGiocatori() {
document.getElementsByClassName('popupS')[0].style.display = 'none';	
g1Sound = new setSound(g1SoundT.value);
g2Sound = new setSound(g2SoundT.value);
g3Sound = new setSound(g3SoundT.value);
g4Sound = new setSound(g4SoundT.value);
  switch(numG) {
	  case 2:
      ped1 = new pedina(g1.value, 70, 115, 0, 0, 'img/p1.png', 200, 0, 10, 0);
	  ped1.position();
      ped1.create();
	  ped2 = new pedina(g2.value, 110, 115, 1, 0, 'img/p2.png', 200, 0, 10, 0);
	  ped2.position();
      ped2.create();
      ped3 = new pedina(g3.value, 70, 25, 2, 0, 'img/pnull.png', 'x', 0, 20, 0);
	  ped3.create();
      ped4 = new pedina(g4.value, 110, 25, 3, 0, 'img/pnull.png', 'x', 0, 20, 0);
	  ped4.create();
	  aggGG();
	  break;
	  case 3:
	  ped1 = new pedina(g1.value, 70, 115, 0, 0, 'img/p1.png', 200, 0, 10, 0);
	  ped1.position();
      ped1.create();
      ped2 = new pedina(g2.value, 110, 115, 1, 0, 'img/p2.png', 200, 0, 10, 0);
	  ped2.position();
      ped2.create();
      ped3 = new pedina(g3.value, 70, 25, 2, 0, 'img/p3.png', 200, 0, 10, 0);
	  ped3.position();
      ped3.create();
      ped4 = new pedina(g4.value, 110, 25, 3, 0, 'img/pnull.png', 'x', 0, 20, 0);
	  ped4.position();
	  ped4.create();
	  aggGG();
	  break;
	  case 4:
	  ped1 = new pedina(g1.value, 70, 115, 0, 0, 'img/p1.png', 200, 0, 10, 0);
	  ped1.position();
      ped1.create();
      ped2 = new pedina(g2.value, 110, 115, 1, 0, 'img/p2.png', 200, 0, 10, 0);
	  ped2.position();
      ped2.create();
      ped3 = new pedina(g3.value, 70, 25, 2, 0, 'img/p3.png', 200, 0, 10, 0);
	  ped3.position();
      ped3.create();
      ped4 = new pedina(g4.value, 110, 25, 3, 0, 'img/p4.png', 200, 0, 10, 0);
	  ped4.position();
      ped4.create();
	  aggGG();
	  break;
  }
createS();
clearForm();
iniziaTurno();
}

function setSound(sound) {
this.sound = sound;
this.create = function() {
   switch(this.sound) {
   case 'Scoreggia':
   return 'snd/fart1.mp3';
   break;
   case 'Rutto':
   return 'snd/rutto1.mp3';
   break;
   case 'Fango':
   return 'snd/fango1.mp3';
   break;
   case 'Cigolio':
   return 'snd/cigolio1.mp3';
   break;
   default:
   return 'snd/fart1.mp3';
   }
  }
}

function createS() {
soundG1.src = g1Sound.create();
soundG1.load();
soundG2.src = g2Sound.create();
soundG2.load();
soundG3.src = g3Sound.create();
soundG3.load();
soundG4.src = g4Sound.create();
soundG4.load();
}

function clearForm() {
g1.setAttribute('value', 'G1');
g2.setAttribute('value', 'G2');
g3.setAttribute('value', 'G3');
g4.setAttribute('value', 'G4');
g1SoundT.setAttribute('value', '');
g2SoundT.setAttribute('value', '');
g3SoundT.setAttribute('value', '');
g4SoundT.setAttribute('value', '');
}

//aggiorna i dati delle pedine nel menù sempre visibile in basso
function aggGG() {
  if (ped1.life > 0) {
	  document.getElementById('aggG1').innerHTML = ped1.nome + ': Vita = ' + ped1.life + ' Forza = ' + ped1.power + ' Oro = ' + ped1.gold;
  } else if (ped1.life <= 0 || ped1.life == 'x') {
	  document.getElementById('aggG1').innerHTML = ped1.nome + ": <img src='img/grave.png' width='20px' height='20px'>";
  }
  if (ped2.life > 0) {
	  document.getElementById('aggG2').innerHTML = ped2.nome + ': Vita = ' + ped2.life + ' Forza = ' + ped2.power + ' Oro = ' + ped2.gold;
  } else if (ped2.life <= 0 || ped2.life == 'x') {
	  document.getElementById('aggG2').innerHTML = ped2.nome + ": <img src='img/grave.png' width='20px' height='20px'>";
  }
  if (ped3.life > 0) {
	  document.getElementById('aggG3').innerHTML = ped3.nome + ': Vita = ' + ped3.life + ' Forza = ' + ped3.power + ' Oro = ' + ped3.gold;
  } else if (ped3.life <= 0 || ped3.life == 'x') {
	  document.getElementById('aggG3').innerHTML = ped3.nome + ": <img src='img/grave.png' width='20px' height='20px'>";
  }
  if (ped4.life > 0) {
	  document.getElementById('aggG4').innerHTML = ped4.nome + ': Vita = ' + ped4.life + ' Forza = ' + ped4.power + ' Oro = ' + ped4.gold;
  } else if (ped4.life <= 0 || ped4.life == 'x') {
	  document.getElementById('aggG4').innerHTML = ped4.nome + ": <img src='img/grave.png' width='20px' height='20px'>";
  }
}

