let btn = document.getElementById('IdBotao')
btn.addEventListener('click', playGame)

const p1 = [
  "2H",
  "3H",
  "4H",
  "5H",
  "6H",
  "7H",
  "8H",
  "9H",
  "10H",
  "11H",
  "12H",
  "13H",
  "14H",
  "2C",
  "3C",
  "4C",
  "5C",
  "6C",
  "7C",
  "8C",
  "9C",
  "10C",
  "11C",
  "12C",
  "13C",
  "14C",
  "2D",
  "3D",
  "4D",
  "5D",
  "6D",
  "7D",
  "8D",
  "9D",
  "10D",
  "11D",
  "12D",
  "13D",
  "14D",
  "2S",
  "3S",
  "4S",
  "5S",
  "6S",
  "7S",
  "8S",
  "9S",
  "10S",
  "11S",
  "12S",
  "13S",
  "14S",
];

const p2 = [
  "2H",
  "3H",
  "4H",
  "5H",
  "6H",
  "7H",
  "8H",
  "9H",
  "10H",
  "11H",
  "12H",
  "13H",
  "14H",
  "2C",
  "3C",
  "4C",
  "5C",
  "6C",
  "7C",
  "8C",
  "9C",
  "10C",
  "11C",
  "12C",
  "13C",
  "14C",
  "2D",
  "3D",
  "4D",
  "5D",
  "6D",
  "7D",
  "8D",
  "9D",
  "10D",
  "11D",
  "12D",
  "13D",
  "14D",
  "2S",
  "3S",
  "4S",
  "5S",
  "6S",
  "7S",
  "8S",
  "9S",
  "10S",
  "11S",
  "12S",
  "13S",
  "14S",
];

let placarP1 = 0;
let placarP2 = 0;

function sortCard() {
  return Math.floor(Math.random() * p1.length);
}

function playGame() {
    const usuario = document.getElementById("idNome").value;
    document.getElementById("idNome").value

    if (usuario === '') {
        document.getElementById("prevent").innerHTML = 'Enter your name to start the game!';
        usuario.preventDefault();        
    }

    document.getElementById("welcome").classList.add('disabled')
    

  if (p1.length > 0 && p2.length > 0) {
    let card1 = p1[sortCard()];
    let card2 = p2[sortCard()];

    if (
      Number(card1.slice(0, card1.length - 1)) ===
      Number(card2.slice(0, card2.length - 1))
    ) {
      document.getElementById("result").innerHTML = "Round tied";
      document.getElementById("player1").innerHTML = `<h4>Player ${usuario}</h4><br><img src="https://github.com/brunojacby/cardgame/blob/master/imagens/avatarP1.png?raw=true" class="avatar" alt="Player">`
      document.getElementById("player2").innerHTML = `<h4>Jacby Robot</h4><br><img src="https://github.com/brunojacby/cardgame/blob/master/imagens/bot.jpg?raw=true" class="avatar" alt="bot">`
      document.getElementById("player1-card").innerHTML = `
        <img src="https://raw.githubusercontent.com/brunojacby/cardgame/89cae1e9699794671c31a8a6c951b9669a456f61/imagens/${card1}.svg" alt="" width="100" height="150"/>`;

      document.getElementById("player2-card").innerHTML = `
        <img src="https://raw.githubusercontent.com/brunojacby/cardgame/89cae1e9699794671c31a8a6c951b9669a456f61/imagens/${card2}.svg" alt="" width="100" height="150"/>`;
    } else if (
      Number(card1.slice(0, card1.length - 1)) >
      Number(card2.slice(0, card2.length - 1))
    ) {
      document.getElementById("result").innerHTML = `${usuario} Win`;
      document.getElementById("player1").innerHTML = `<h4>Player ${usuario}</h4><br><img src="https://github.com/brunojacby/cardgame/blob/master/imagens/avatarP1.png?raw=true" class="avatar" alt="Player">`
      document.getElementById("player2").innerHTML = `<h4>Jacby Robot</h4><br><img src="https://github.com/brunojacby/cardgame/blob/master/imagens/bot.jpg?raw=true" class="avatar loss" alt="bot">`
      document.getElementById("player1-card").innerHTML = `
        <img src="https://raw.githubusercontent.com/brunojacby/cardgame/89cae1e9699794671c31a8a6c951b9669a456f61/imagens/${card1}.svg" alt="" width="100" height="150"/>`;

      document.getElementById("player2-card").innerHTML = `
        <img src="https://raw.githubusercontent.com/brunojacby/cardgame/89cae1e9699794671c31a8a6c951b9669a456f61/imagens/${card2}.svg" alt="" width="100" height="150"/>`;
      placarP1++;
    } else {
      document.getElementById("result").innerHTML = "Robot Win";
      document.getElementById("player1").innerHTML = `<h4>Player ${usuario}</h4><br><img src="https://github.com/brunojacby/cardgame/blob/master/imagens/avatarP1.png?raw=true" class="avatar loss" alt="Player">`
      document.getElementById("player2").innerHTML = `<h4>Jacby Robot</h4><br><img src="https://github.com/brunojacby/cardgame/blob/master/imagens/bot.jpg?raw=true" class="avatar" alt="bot">`
      document.getElementById("player1-card").innerHTML = `
        <img src="https://raw.githubusercontent.com/brunojacby/cardgame/89cae1e9699794671c31a8a6c951b9669a456f61/imagens/${card1}.svg" alt="" width="100" height="150"/>`;

      document.getElementById("player2-card").innerHTML = `
        <img src="https://raw.githubusercontent.com/brunojacby/cardgame/89cae1e9699794671c31a8a6c951b9669a456f61/imagens/${card2}.svg" alt="" width="100" height="150"/>`;
      placarP2++;
    }

    p1.splice(p1.indexOf(card1), 1);
    p2.splice(p2.indexOf(card2), 1);
    document.getElementById("placar").innerHTML = `Score:<br> ${placarP1} x ${placarP2}`
  } else {
    if (placarP1 === placarP2) {
      document.getElementById("tudo").innerHTML = `<h2>The game ended in a draw!</h2><br>
      <button type="button" class="row btn btn-info" onclick="window.location.reload()">PLAY AGAIN!</button>`;
      document.getElementById("placar").innerHTML = ""
      document.getElementById("IdBotao").classList.add('disabled');
      
    } else if (placarP1 > placarP2) {
      document.getElementById("tudo").innerHTML = `<img src="https://github.com/brunojacby/cardgame/blob/master/imagens/avatarP1.png?raw=true" class="avatar" alt="Player"><br><h2>${usuario} win the game!</h2><br>
      <button type="button" class="row btn btn-info" onclick="window.location.reload()">PLAY AGAIN!</button>
      `;
      document.getElementById("placar").innerHTML = ""
      document.getElementById("IdBotao").classList.add('disabled');
      
    } else {
      document.getElementById("tudo").innerHTML = `<img src="https://github.com/brunojacby/cardgame/blob/master/imagens/bot.jpg?raw=true" class="avatar" alt="bot"><br><h2>Jacby Robot win the game!</h2><br>
      <button type="button" class="row btn btn-info" onclick="window.location.reload()">PLAY AGAIN!</button>`;
      document.getElementById("placar").innerHTML = "";
      document.getElementById("IdBotao").classList.add('disabled');
    }
    return;
  }
}
