document.addEventListener('DOMContentLoaded', function () {
  var grid = []
  var player = 1
  var p1moves = []
  var p2moves = []
  var boxes = document.querySelector('.container').querySelectorAll('div')
  var h2 = document.querySelector('h2')
  var button = document.querySelector('button')

// It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played.
// It should return a boolean value to indicate whether the move was allowed or not
// - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.
  function playTurn (index) {
    if (grid.includes(index) || isGameOver()) {
      return false
    } else {
      grid.push(index)
      if (player === 1) {
        p1moves.push(index)
      } else {
        p2moves.push(index)
      }
    }

    if (isGameOver()) {
      if (whoWon() === 1) {
        h2.textContent = 'Player 1 Wins'
      } else if (whoWon() === 2) {
        h2.textContent = 'Player 2 Wins'
      } else {
        h2.textContent = 'Draw'
      }
    }
    return true
  }

// is GameOver It should return a true or false if the game is over.
  function isGameOver () {
    if (whoWon()) {
      return true
    } else {
      return false
    }
  }

// whoWon It should return 0 if the game is not yet finished.
// Else it should return either 1 or 2 depending on which player won.
// It should return 3 if the game is a draw.
  function whoWon () {
    if ((p1moves.includes(0) && p1moves.includes(1) && p1moves.includes(2)) || (p1moves.includes(3) && p1moves.includes(4) && p1moves.includes(5)) || (p1moves.includes(6) && p1moves.includes(7) && p1moves.includes(8)) || (p1moves.includes(0) && p1moves.includes(3) && p1moves.includes(6)) || (p1moves.includes(1) && p1moves.includes(4) && p1moves.includes(7)) || (p1moves.includes(2) && p1moves.includes(5) && p1moves.includes(8)) || (p1moves.includes(0) && p1moves.includes(4) && p1moves.includes(8)) || (p1moves.includes(2) && p1moves.includes(4) && p1moves.includes(6))) {
      return 1
    } else if ((p2moves.includes(0) && p2moves.includes(1) && p2moves.includes(2)) || (p2moves.includes(3) && p2moves.includes(4) && p2moves.includes(5)) || (p2moves.includes(6) && p2moves.includes(7) && p2moves.includes(8)) || (p2moves.includes(0) && p2moves.includes(3) && p2moves.includes(6)) || (p2moves.includes(1) && p2moves.includes(4) && p2moves.includes(7)) || (p2moves.includes(2) && p2moves.includes(5) && p2moves.includes(8)) || (p2moves.includes(0) && p2moves.includes(4) && p2moves.includes(8)) || (p2moves.includes(2) && p2moves.includes(4) && p2moves.includes(6))) {
      return 2
    } else if (grid.length === 9) {
      return 3
    } else {
      return 0
    }
  }

// restart It should restart the game so it can be played again.
  function restart () {
    grid = []
    player = 1
    p1moves = []
    p2moves = []
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].textContent = ''
    }
    h2.textContent = ''
  }

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function (e) {
      if (playTurn(parseInt(e.target.dataset.num))) {
        if (player === 1) {
          e.target.textContent = 'X'
          player = 2
        } else {
          e.target.textContent = 'O'
          player = 1
        }
      }
    })
  }

  button.addEventListener('click', restart)
})
