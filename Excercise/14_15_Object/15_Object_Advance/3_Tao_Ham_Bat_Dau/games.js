/**
 * Starts a battle between two characters and returns the winner.
 * @param {Character} char1 The first character.
 * @param {Character} char2 The second character.
 * @returns {Character} The winning character.
 */
export function battle(char1, char2) {
  let round = 1;
  while (char1.isAlive() && char2.isAlive()) {
    console.log(`Round ${round} :`);
    if (round % 2 === 0) {
      char1.attack(char2);
    } else {
      char2.attack(char1);
    }
    round++;
  }

  const win = char1.isAlive() ? char1 : char2;
  console.log(`${win.name} wins!`);
  return win;
}
