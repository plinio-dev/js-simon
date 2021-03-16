// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
$(function(){

  function numeriRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  var arrayComp = [];


  // genero i 5 numeri random
  for (var i = 0; i < 5; i++) {
    var numeriRandom = numeriRand(1,10);
    arrayComp.push(numeriRandom);
  }

  // esporre i 5 numeri random con un alert
  alert(arrayComp);
  console.log(arrayComp);

  var numeriUtente;
  numeriValidi = [];

  var clock = setTimeout(function () {
    clearTimeout(clock);
    for (var j = 0; j < 5; j++) {
      numeriUtente = parseInt(prompt("Inserisci i numeri che hai visto prima"));
      if (arrayComp.includes(numeriUtente) == true) {
        numeriValidi.push(numeriUtente);
        console.log(numeriValidi);
      }

    }


    // if ( arrayUtente.includes(numeriUtente) == false) {
      console.log("hai ricordato " + numeriValidi.length + " numeri validi");


  }, 3000);

});
