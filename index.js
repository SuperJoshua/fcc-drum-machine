"use strict"

window.addEventListener('keydown', function (event) {
   switch (event.keyCode) {
      case 81:
         document.querySelector('#Q').play();
         document.querySelector('#display').textContent =  'open high hat';
         break;
      case 87:
         document.querySelector('#W').play();
         document.querySelector('#display').textContent =  'closed high hat';
         break;
      case 69:
         document.querySelector('#E').play();
         document.querySelector('#display').textContent =  'shaker';
         break;
      case 65:
         document.querySelector('#A').play();
         document.querySelector('#display').textContent =  'side stick';
         break;
      case 83:
         document.querySelector('#S').play();
         document.querySelector('#display').textContent =  'snare';
         break;
      case 68:
         document.querySelector('#D').play();
         document.querySelector('#display').textContent =  'clap';
         break;
      case 90:
         document.querySelector('#Z').play();
         document.querySelector('#display').textContent =  'kick';
         break;
      case 88:
         document.querySelector('#X').play();
         document.querySelector('#display').textContent =  "kick 'n' hat";
         break;
      case 67:
         document.querySelector('#C').play();
         document.querySelector('#display').textContent =  'punchy kick';
         break;
      default: break;
   }
})
document.querySelector('#open-high-hat').addEventListener('click', function () {
   document.querySelector('#Q').play();
   document.querySelector('#display').textContent =  'open high hat';
})
document.querySelector('#closed-high-hat').addEventListener('click', function () {
   document.querySelector('#W').play();
   document.querySelector('#display').textContent =  'closed high hat';
})
document.querySelector('#shaker').addEventListener('click', function () {
   document.querySelector('#E').play();
   document.querySelector('#display').textContent =  'shaker';
})
document.querySelector('#side-stick').addEventListener('click', function () {
   document.querySelector('#A').play();
   document.querySelector('#display').textContent =  'side stick';
})
document.querySelector('#snare').addEventListener('click', function () {
   document.querySelector('#S').play();
   document.querySelector('#display').textContent =  'snare';
})
document.querySelector('#clap').addEventListener('click', function () {
   document.querySelector('#D').play();
   document.querySelector('#display').textContent =  'clap';
})
document.querySelector('#kick').addEventListener('click', function () {
   document.querySelector('#Z').play();
   document.querySelector('#display').textContent =  'kick';
})
document.querySelector('#kick-n-hat').addEventListener('click', function () {
   document.querySelector('#X').play();
   document.querySelector('#display').textContent =  "kick 'n' hat";
})
document.querySelector('#punchy-kick').addEventListener('click', function () {
   document.querySelector('#C').play();
   document.querySelector('#display').textContent =  'punchy kick';
})
