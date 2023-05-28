window.onload = function() {
    let numberToGuess;
    let attempts = 0;
  
    startNewGame();
  
    function startNewGame() {
      numberToGuess = Math.floor(Math.random() * 101);
      attempts = 0;
      alert("Вгадайте число від 0 до 100");
      makeGuess();
    }
  
    function makeGuess() {
      let userGuess = parseInt(prompt("Введіть вашу догадку:"));
  
      if (isNaN(userGuess)) {
        alert("Будь ласка, введіть число!");
        makeGuess();
        return;
      }
  
      attempts++;
  
      if (userGuess === numberToGuess) {
        alert("Ви вгадали число " + numberToGuess + " за " + attempts + " спроб!");
        let playAgain = confirm("Бажаєте зіграти ще раз?");
        if (playAgain) {
          startNewGame();
        }
      } else {
        let message = getTemperatureMessage(userGuess);
        alert(message);
        makeGuess();
      }
    }
  
    function getTemperatureMessage(guess) {
      let difference = Math.abs(guess - numberToGuess);
  
      if (difference >= 50) {
        return "Дуже холодно";
      } else if (difference >= 30) {
        return "Холодно";
      } else if (difference >= 10) {
        return "Тепло";
      } else if (difference >= 5) {
        return "Гаряче";
      }
      else {
        return "Дуже Гаряче"
      }
    }
  };
  