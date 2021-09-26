// Query Selectors
var board = document.querySelector('#board');
var startBtn = document.querySelector('#startBtn');
var squares = document.querySelectorAll('.square');
var header = document.querySelector('#header');
var player1Scoreboard = document.querySelector('#p1Scoreboard');
var player2Scoreboard = document.querySelector('#p2Scoreboard');

// Event Listeners
window.addEventListener('load', resetBoard);
startBtn.addEventListener('click', resetBoard);
board.addEventListener('click', placeToken);

// Functions
function resetBoard() {
  game = new Game();
  header.innerText = 'Welcome to Tic-Tac-Toe!';
  board.innerHTML = `
  <section class="board" id="board">
    <section class="row-1">
      <div class="square" id="1">
    </div>
      <div class="square" id="2"></div>
      <div class="square" id="3"></div>
    </section>
    <section class="row-2">
      <div class="square" id="4"></div>
      <div class="square" id="5"></div>
      <div class="square" id="6"></div>
    </section>
    <section class="row-3">
      <div class="square" id="7"></div>
      <div class="square" id="8"></div>
      <div class="square" id="9"></div>
    </section>
  </section>
  `
};

function placeToken() {
  if (game.winner) {
    return;
  }
  if (event.target.classList.contains('square')) {
    if (game.player1Turn === true && !game.playedSquaresP1.includes(event.target.id) && !game.playedSquaresP2.includes(event.target.id)) {
      game.playedSquaresP1.push(event.target.id);
      event.target.innerHTML = `
      <p>🧛‍♀️</p>
      `
      game.switchTurns();
    } else if (game.player2Turn === true && !game.playedSquaresP2.includes(event.target.id) && !game.playedSquaresP1.includes(event.target.id)){
      game.playedSquaresP2.push(event.target.id);
      event.target.innerHTML = `
      <p>👻</p>
      `
      game.switchTurns();
    } else {
      return;
    }
    game.checkForWins();
    // game.detectDraw();
    updateScore();
    if (game.winner === null) {
      checkCurrentPlayer();
    }
  }
};

function updateScore() {
  if (game.winner === game.player1) {
    player1Scoreboard.innerText = `${game.player1Wins}`;
  } else if (game.winner === game.player2) {
    player2Scoreboard.innerText = `${game.player2Wins}`;
  }
};

function checkCurrentPlayer() {
  var currentPlayer;
  if (game.player1Turn === true) {
      currentPlayer = game.player1;
  } else {
      currentPlayer = game.player2;
  }
  header.innerText = `It's ${currentPlayer.token}'s turn!`;
};
