let players = ['x', 'o'];
let activePlayer = 0;
let field = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let emptyField = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let stepCount = 0;

function startGame() {

  activePlayer = 'x';

  renderBoard(field);

  field = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
}

function click(row, col) {

  field[row][col] = activePlayer;
    
  renderBoard(field);

  for(i = 0; i < field.length; i++) {

    if( ((field[i][0] === activePlayer) && (field[i][1] === activePlayer) &&   (field[i][2] === activePlayer)) 
      || ((field[0][i] === activePlayer) && (field[1][i] === activePlayer) && (field[2][i] === activePlayer)) 
      || ((field[0][0] === activePlayer) && (field[1][1] === activePlayer) && (field[2][2] === activePlayer)) 
      || ((field[0][2] === activePlayer) && (field[1][1] === activePlayer) && (field[2][0] === activePlayer)) ) {
        showWinner(activePlayer);
        } 
  }
  changePlayer();
  renderBoard(field);
}


function changePlayer() {
  if(activePlayer === 'x') {
    activePlayer = 'O';
  } else {
    activePlayer = 'x';
  }
}

