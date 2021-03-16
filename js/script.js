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

  // setto un orologio su 3 secondi
  var clock = setTimeout(function () {
    clearTimeout(clock);
    // chiedo all'utente di inserire 5 numeri, se sono contenuti nell'array dei numeri generati, li inserisco in un array con soli numeri validi
    for (var j = 0; j < 5; j++) {
      numeriUtente = parseInt(prompt("Inserisci i numeri che hai visto prima"));
      if (arrayComp.includes(numeriUtente) == true) {
        numeriValidi.push(numeriUtente);
      }
    }

     // il software dice quanti e quali dei numeri da indovinare sono stati individuati.
      console.log("hai ricordato " + numeriValidi.length + " numeri validi");
      console.log("I numeri validi sono " + numeriValidi);

  }, 3000);

});
