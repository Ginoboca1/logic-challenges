/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

const calculateWinner = (plays) => {
  let player1Wins = 0;
  let player2Wins = 0;
  for (let play of plays) {
    const [player1, player2] = play;
    if (
      (player1 === "R" && player2 === "S") ||
      (player1 === "S" && player2 === "P") ||
      (player1 === "P" && player2 === "R")
    ) {
      player1Wins++;
    } else if (
      (player2 === "R" && player1 === "S") ||
      (player2 === "S" && player1 === "P") ||
      (player2 === "P" && player1 === "R")
    ) {
      player2Wins++;
    }
  }

  if (player1Wins > player2Wins) {
    return "Player 1";
  } else if (player2Wins > player1Wins) {
    return "Player 2";
  } else {
    return "Tie";
  }
};

const plays = [
  ["R", "S"],
  ["S", "R"],
  ["P", "S"],
];
console.log(calculateWinner(plays));
