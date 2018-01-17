/*jshint esversion: 6 */

let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
}

function getRoundWinner(roundNumber) {
  switch(roundNumber) {
    case 1:
      return getMoveWinner(playerOneMoveOneType,
                           playerOneMoveOneValue,
                           playerTwoMoveOneType,
                           playerTwoMoveOneValue);
    case 2:
      return getMoveWinner(playerOneMoveTwoType,
                           playerOneMoveTwoValue,
                           playerTwoMoveTwoType,
                           playerTwoMoveTwoValue);
    case 3:
      return getMoveWinner(playerOneMoveThreeType,
                           playerOneMoveThreeValue,
                           playerTwoMoveThreeType,
                           playerTwoMoveThreeValue);
  }
}

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
  if (playerOneMoveType === playerTwoMoveType) {
    if (playerOneMoveValue > playerTwoMoveValue) {
      return 'Player One';
    } else if (playerOneMoveValue < playerTwoMoveValue) {
      return 'Player Two';
    } else {
      return 'Tie';
    }
  }
  if (playerOneMoveType === 'rock') {
    if (playerTwoMoveType === 'scissors') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  } else if (playerOneMoveType === 'paper') {
    if (playerTwoMoveType === 'rock') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  } else {
    if (playerTwoMoveType === 'paper') {
      return 'Player One';
    } else {
      return 'Player Two';
    }
  }
}

function getGameWinner() {
  playerOneWins = 0;
  playerTwoWins = 0;

  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  addWin(roundOneWinner);
  addWin(roundTwoWinner);
  addWin(roundThreeWinner);
  if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else {
    return 'Tie';
  }
}

function addWin(winner) {
  if (winner === 'Player One') {
    playerOneWins = (playerOneWins + 1);
  } else if (winner === 'Player Two') {
    playerTwoWins = (playerTwoWins + 1);
  }
}

function setComputerMoves() {
  const moves = ['rock', 'paper', 'scissors'];
  const moveOneType = moves[Math.floor(Math.random() * 3)];
  const moveTwoType = moves[Math.floor(Math.random() * 3)];
  const moveThreeType = moves[Math.floor(Math.random() * 3)];
  const moveOneValue = Math.floor(Math.random() * 30) + 1;
  const moveTwoValue = Math.floor(Math.random() * (31 - moveOneValue)) + 1;
  const moveThreeValue = 33 - moveOneValue - moveTwoValue;
  setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType,
                 moveTwoValue, moveThreeType, moveThreeValue);
}
